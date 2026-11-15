import asyncio, sys, json
from playwright.async_api import async_playwright
BASE="http://localhost:3000"
PAGES=["/","/programs/","/programs/group-training/","/programs/hourly-training/","/coaches/","/about/","/gallery/","/faq/","/register/","/contact/","/nope/"]
VPS={"desktop":(1440,900),"tablet":(820,1180),"mobile":(390,844)}
async def main(which):
    async with async_playwright() as p:
        b=await p.chromium.launch()
        report=[]
        for vn,(w,h) in VPS.items():
            if which and vn not in which: continue
            ctx=await b.new_context(viewport={"width":w,"height":h}, reduced_motion="reduce")
            pg=await ctx.new_page()
            errs=[]
            pg.on("console", lambda m, errs=errs: errs.append(m.text) if m.type=="error" else None)
            pg.on("pageerror", lambda e, errs=errs: errs.append(str(e)))
            pg.on("requestfailed", lambda r, errs=errs: errs.append("FAILED "+r.url))
            for path in PAGES:
                errs.clear()
                r=await pg.goto(BASE+path, wait_until="networkidle")
                ov=await pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
                bad=await pg.evaluate("""[...document.images].filter(i=>i.complete && i.naturalWidth===0 && i.loading!=='lazy').map(i=>i.src)""")
                name=path.strip('/').replace('/','_') or 'home'
                await pg.screenshot(path=f"/home/claude/qa/{vn}-{name}.png", full_page=True)
                report.append({"vp":vn,"path":path,"status":r.status,"overflowX":ov,"brokenImgs":bad,"errors":list(errs)})
            await ctx.close()
        await b.close()
        for r in report:
            flag = "" if (r["overflowX"]<=0 and not r["errors"] and not r["brokenImgs"]) else "  <-- CHECK"
            print(r["vp"],r["path"],r["status"],"ovX",r["overflowX"],r["errors"][:3],r["brokenImgs"][:2],flag)
asyncio.run(main(sys.argv[1:]))

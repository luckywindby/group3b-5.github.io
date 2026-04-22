import T from '../components/T'
import { SectionHead, SubSectionHead, Subhead, Proof, Badge, Chip } from '../components/UI'
import amapRouteEntry from '../assets/amap-route-entry.png'

const CRAZY = [
  { en: 'Fixed freshman mainline', zh: '固定新生主线', d: ['One default route, very simple but rigid.', '只有一条默认路线，简单但过于僵硬。'] },
  { en: 'Browse-first library', zh: '先浏览再选择', d: ['Flexible, but increases decision load.', '更自由，但提高了决策负担。'] },
  { en: 'Hybrid route entry', zh: '混合式路线入口', d: ['Recommendation, browse modes, and quick actions coexist.', '推荐、浏览和快捷操作并存。'] },
  { en: 'Map-first planner', zh: '地图优先规划器', d: ['Powerful, but assumes existing campus knowledge.', '功能强，但默认用户已有校园认知。'] },
  { en: 'Guided questionnaire', zh: '引导式问卷', d: ['Supports steady, reassuring completion.', '更适合循序渐进、稳定完成。'] },
  { en: 'Quick-pick scenarios', zh: '快捷场景芯片', d: ['Faster entry for common needs.', '适合常见需求的快速入口。'] },
  { en: 'Route-detail storytelling', zh: '路线详情叙事化', d: ['Stops are explained, not only listed.', '站点不仅被罗列，还会被解释。'] },
  { en: 'Memory-based ending', zh: '记忆沉淀式结尾', d: ['Navigation ends with memory and belonging.', '导航最后落到记忆与归属感。'] },
]

export default function IdeationSection() {
  return (
    <section id="ideation">
      <div className="shell">
        <SectionHead en="3. Ideation &amp; Alternatives" zh="3. 概念构思与备选方案" descEn="This section shows how we moved from sketch-level thinking to coded route-entry decisions." descZh="这一部分展示我们如何从草图思考推进到真正实现的路线入口决策。" />

        <article className="panel">
          <Subhead en="Crazy Eights summary" zh="Crazy Eights 概述" />
          <h3><T en="Eight rapid concept directions" zh="8 个快速概念方向" /></h3>
          <p className="muted"><T en="The photographed sketch sheet is not preserved in the current repo snapshot, so the grid below reconstructs the explored directions faithfully." zh="当前仓库快照中没有保留原始手绘草图照片，因此下面以重构方式呈现当时探索过的 8 个方向。" /></p>
          <div className="crazy-grid" style={{ marginTop: 16 }}>
            {CRAZY.map((c, i) => (
              <article className="crazy-tile" key={i}>
                <span className="crazy-index">{i + 1}</span>
                <h4><T en={c.en} zh={c.zh} /></h4>
                <p><T en={c.d[0]} zh={c.d[1]} /></p>
              </article>
            ))}
          </div>
          <div className="proof-row" style={{ marginTop: 16 }}>
            <Proof variant="missing" en="Replace with photographed Crazy Eights sketch sheet if available" zh="如有原始 Crazy Eights 草图照片，请替换为真实图片" />
          </div>
        </article>

        <SubSectionHead style={{ marginTop: 24 }} en="Design alternatives" zh="设计备选方案" descEn="The main design decision was how users should enter the route system." descZh="最重要的设计决策是：用户应如何进入路线系统。" />

        <div className="comparison-grid">
          <article className="comparison-card">
            <Badge variant="warning" en="Alternative A" zh="方案 A" />
            <h4><T en="Single fixed mainline" zh="单一固定主线" /></h4>
            <ul>
              <li><T en="Very simple for first-time freshmen." zh="对新生首次使用非常简单。" /></li>
              <li><T en="Too rigid for visitors or current students." zh="对访客和在校生来说过于僵硬。" /></li>
              <li><T en="Weak support for diverse service tasks." zh="无法很好支持多样化办事需求。" /></li>
            </ul>
          </article>
          <article className="comparison-card">
            <Badge en="Alternative B" zh="方案 B" />
            <h4><T en="Browse-only route library" zh="纯浏览式路线库" /></h4>
            <ul>
              <li><T en="Flexible and scalable." zh="更灵活，也更可扩展。" /></li>
              <li><T en="Still demands too much decision-making." zh="仍然要求用户做太多决策。" /></li>
              <li><T en="Weak fit for anxious first-use onboarding." zh="不适合焦虑状态下的首次 onboarding。" /></li>
            </ul>
          </article>
          <article className="comparison-card is-chosen">
            <Badge variant="good" en="Chosen | Alternative C" zh="最终选择 | 方案 C" />
            <h4><T en="Hybrid route-entry system" zh="混合式路线入口系统" /></h4>
            <ul>
              <li><T en="Combines recommendation, route browsing, and quick actions." zh="把推荐、路线浏览和快捷操作结合起来。" /></li>
              <li><T en="Balances guidance with flexibility across user groups." zh="在不同用户群之间平衡引导与灵活性。" /></li>
              <li><T en="Matches the strongest requirement findings from the survey." zh="最贴合问卷中最强烈的需求结果。" /></li>
            </ul>
          </article>
        </div>

        <div className="layout-2" style={{ marginTop: 18 }}>
          <article className="panel">
            <Subhead en="Implemented A/B route entry" zh="已实现的 A/B 路线入口" />
            <h3><T en="Questionnaire variants inside the product" zh="产品内置的问卷变体" /></h3>
            <ul>
              <li><T en={<><strong>Variant A:</strong> guided form for steady step-by-step completion.</>} zh={<><strong>变体 A：</strong> 引导式表单，更适合稳定的逐步完成。</>} /></li>
              <li><T en={<><strong>Variant B:</strong> quick picks with preset scenarios for faster decisions.</>} zh={<><strong>变体 B：</strong> 预设场景快捷选择，更适合快速决策。</>} /></li>
              <li><T en="The selected layout preference is stored as live evidence for alternative comparison." zh="系统会记录用户偏好的布局，作为真实的方案比较证据。" /></li>
            </ul>
            <div className="proof-row">
              <Proof variant="code" en="Recommendation A/B logic exists in the live app" zh="推荐问卷 A/B 逻辑已在系统中实现" />
            </div>
          </article>
          <article className="figure-card">
            <figure>
              <img src={amapRouteEntry} alt="Campus Compass route entry screen" />
              <figcaption><T en="Implemented route-entry screen combining recommendation, quick scenarios, and practical handoff." zh="已实现的路线入口界面：融合推荐、快捷场景与实用入口。" /></figcaption>
            </figure>
          </article>
        </div>

        <div className="layout-2" style={{ marginTop: 18 }}>
          <article className="panel">
            <Subhead en="Low-fi prototype" zh="低保真原型" />
            <h3><T en="Figma / wireframe status" zh="Figma / 线框原型" /></h3>
            <p><T en="The low-fidelity prototype was developed in Figma to test route-entry logic, information hierarchy, and onboarding flow before implementation." zh="低保真原型使用 Figma 制作，用于在编码前验证路线入口逻辑、信息层级和 onboarding 流程。" /></p>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong><T en="Clickable low-fi prototype" zh="可点击低保真原型" /></strong>
              <a href="https://www.figma.com/design/TXMhLNCqUL2LQQhf7eFf0I/Campus-Tour-Demo?node-id=0-1&t=IYFHVDs4P2vzzEOt-1" target="_blank" rel="noreferrer" style={{ color: 'var(--brand)', fontWeight: 700 }}>
                <T en="Open the Campus Tour Demo Figma file" zh="打开 Campus Tour Demo 的 Figma 文件" />
              </a>
            </div>
            <div className="proof-row">
              <Proof variant="code" en="Figma prototype link attached" zh="Figma 原型链接已补充" />
            </div>
          </article>
          <article className="panel">
            <Subhead en="Novel design concept" zh="创新设计概念" />
            <h3><T en="Practical onboarding + playful belonging" zh="实用 onboarding + 趣味归属感" /></h3>
            <p><T en="Campus Compass reframes campus touring as practical onboarding plus playful belonging, rather than a generic map task." zh={"Campus Compass 把校园导览重新定义为“实用入门引导 + 趣味归属感建立”，而不是普通地图任务。"} /></p>
            <p><T en="The experience is human-centred because it does not assume prior knowledge of campus codes or landmarks. It is engaging because progress tracking, route completion, badges, and Campus Memory turn navigation into a memorable campus journey." zh="这一体验之所以以人为中心，是因为它不假设用户已经熟悉校园代号或地标；而之所以具有吸引力，则在于进度追踪、完成反馈、徽章和 Campus Memory 把导航转化成了可记忆的校园旅程。" /></p>
            <div className="chips">
              <Chip en="Zero-barrier routing" zh="零门槛路线引导" />
              <Chip en="Smart route entry" zh="智能路线入口" />
              <Chip en="Feedback and closure" zh="反馈与完成闭环" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

import T from '../components/T'
import { SectionHead, SubSectionHead, Subhead, Badge, Proof } from '../components/UI'
import amapRouteEntry from '../assets/amap-route-entry.png'

const METHODS = [
  { method: ['Heuristic evaluation + cognitive walkthroughs', '启发式评估 + 认知走查'], why: ['Fast formative review for first-use journeys.', '适合对首次使用旅程进行快速形成性评估。'], checks: ['Can newcomers notice actions, feedback, and progress?', '新用户能否看见操作、理解反馈并继续前进？'], evidence: ['Useful for simulating classroom, service, and memory-export flows.', '适合模拟上课、办事和导出记忆卡的流程。'] },
  { method: ['Task-based usability sessions', '任务式可用性测试'], why: ['Matches lecture focus on completion, duration, and friction.', '符合课程中对完成情况、时长和阻力点的关注。'], checks: ['Can users complete key tasks, and where do they hesitate?', '用户能否完成关键任务，又在哪些地方停顿？'], evidence: ['User Test Mode records task, duration, difficulty, blockers, and comments.', 'User Test Mode 会记录任务、时长、难度、阻碍和评论。'] },
  { method: ['Route feedback capture', '路线反馈收集'], why: ['Supports continuous iteration after real route use.', '支持在真实路线使用后持续迭代。'], checks: ['Perceived difficulty, confusing steps, and qualitative comments.', '关注主观难度、困惑步骤和定性评论。'], evidence: ['Each route detail page includes a feedback form.', '每条路线详情页都带有反馈表单。'] },
  { method: ['Admin evidence dashboard', '后台证据看板'], why: ['Turns interaction records into coursework-ready evidence.', '把系统交互记录转化为可用于课程汇报的证据。'], checks: ['Trends across submissions, A/B choices, completions, and test logs.', '查看提交、A/B 选择、完成情况和测试日志的趋势。'], evidence: ['Admin Insights aggregates questionnaire, feedback, and evaluation data.', 'Admin Insights 聚合了问卷、反馈和评估数据。'] },
]

const TASKS = [
  { en: 'Complete the recommendation questionnaire and understand the top match.', zh: '完成推荐问卷，并理解最匹配路线结果。' },
  { en: 'Enter a route, follow the current leg, mark progress, and interpret completion feedback.', zh: '进入一条路线，跟随当前路径，标记进度，并理解完成反馈。' },
  { en: 'Open Campus Memory, refine the generated content, and export a final card.', zh: '打开 Campus Memory，润色生成内容，并导出最终卡片。' },
]

export default function EvaluationSection() {
  return (
    <section id="evaluation">
      <div className="shell">
        <SectionHead en="5. Early Evaluation &amp; Impact" zh="5. 早期评估与影响" descEn="Summarises requirement evidence, alpha-stage signals, testing methods, and design implications." descZh="总结需求证据、Alpha 阶段信号、测试方法，以及它们对设计的影响。" />

        <div className="eval-grid">
          {/* Method selection */}
          <article className="panel">
            <Subhead en="Method selection" zh="方法选择" />
            <h3><T en="How the alpha was evaluated" zh="Alpha 版本如何被评估" /></h3>
            <div className="table-wrap" style={{ marginTop: 14 }}>
              <table aria-label="Method selection">
                <thead><tr>
                  <th><T en="Method" zh="方法" /></th>
                  <th><T en="Why we used it" zh="使用原因" /></th>
                  <th><T en="What it checks" zh="检查内容" /></th>
                  <th><T en="Evidence in the alpha" zh="在 Alpha 中的证据" /></th>
                </tr></thead>
                <tbody>
                  {METHODS.map((m, i) => (
                    <tr key={i}>
                      <td><T en={m.method[0]} zh={m.method[1]} /></td>
                      <td><T en={m.why[0]} zh={m.why[1]} /></td>
                      <td><T en={m.checks[0]} zh={m.checks[1]} /></td>
                      <td><T en={m.evidence[0]} zh={m.evidence[1]} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="layout-3" style={{ marginTop: 16 }}>
              {TASKS.map((t, i) => (
                <article className="task" key={i}>
                  <strong><T en={`Task ${i + 1}`} zh={`任务 ${i + 1}`} /></strong>
                  <p><T en={t.en} zh={t.zh} /></p>
                </article>
              ))}
            </div>
          </article>

          {/* Early findings */}
          <article className="panel">
            <Subhead en="Early findings" zh="早期发现" />
            <h3><T en="Pilot evidence and impact" zh="试点证据与项目影响" /></h3>
            <div className="metrics-grid" style={{ marginTop: 14 }}>
              {[
                { v: 'n = 94', en: 'Valid first-year respondents in the poster-based requirements summary.', zh: '海报中汇总的有效新生需求问卷样本量。' },
                { v: '80.85%', en: 'Demand for clear route guidance as an essential function.', zh: '认为“清晰路线引导”是必要功能的比例。' },
                { v: '73.40%', en: 'Demand for introduction to important locations.', zh: '认为“重要地点介绍”是必要功能的比例。' },
                { v: '61.70%', en: 'Demand for integrated commonly used campus resources.', zh: '认为“整合常用校园资源”是必要功能的比例。' },
              ].map((m, i) => (
                <article className="metric" key={i}>
                  <strong>{m.v}</strong>
                  <p><T en={m.en} zh={m.zh} /></p>
                </article>
              ))}
            </div>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong><T en="Alpha interpretation" zh="Alpha 结果解读" /></strong>
              <T en={<>The poster reports <strong>n = 21</strong> route-entry submissions. Of these, <strong>71.4%</strong> were freshman-class and <strong>28.6%</strong> were visitor-tour, while the most common recommendation was the freshman academic route with a common duration of <strong>40-45 minutes</strong>. This suggests that first-use demand favoured guided practical routes over open exploration.</>} zh={<>海报记录了 <strong>n = 21</strong> 条路线入口提交，其中 <strong>71.4%</strong> 为新生上课导向，<strong>28.6%</strong> 为访客参观导向；最常见推荐结果是新生学术路线，常见时长为 <strong>40-45 分钟</strong>。这说明首次使用时，用户更偏好“被引导的实用路线”，而不是完全开放式探索。</>} />
            </div>
            <p style={{ marginTop: 14 }}><T en="This matters because campus onboarding is not only a wayfinding problem, but also a confidence and belonging problem. Campus Compass addresses this through personalised route entry, practical support tools, progress feedback, and reflective memory capture." zh="这很重要，因为校园 onboarding 不只是寻路问题，更是信心和归属感问题。Campus Compass 通过个性化入口、实用支持工具、进度反馈和记忆沉淀来回应这一挑战。" /></p>
          </article>
        </div>

        {/* Usability + Design implication */}
        <div className="layout-2" style={{ marginTop: 18 }}>
          <article className="panel">
            <Subhead en="Usability testing requirement" zh="可用性测试要求" />
            <h3><T en="Status of 3-person alpha testing" zh="3 人 Alpha 测试状态" /></h3>
            <p><T en="The live application already includes User Test Mode and exportable evidence capture, which is the intended mechanism for the rubric requirement of testing the alpha with 3 real people." zh="系统中已经实现了 User Test Mode 和可导出的证据采集机制，它本来就是为了满足 rubric 中“用 3 个真实用户测试 Alpha 版本”的要求而设计的。" /></p>
            <p><T en="However, the current workspace snapshot does not preserve three completed participant records. If your team exported them separately, attach the screenshots or CSV summary here before final submission." zh="不过，当前工作区快照里没有保留 3 份完整参与者测试记录。如果你们已经单独导出了截图或 CSV，请在最终提交前补充到这里。" /></p>
            <div className="proof-row">
              <Proof variant="code" en="Testing workflow is implemented" zh="测试流程已在系统中实现" />
              <Proof variant="missing" en="Attach 3 real-user result records" zh="请补充 3 位真实用户测试记录" />
            </div>
          </article>
          <article className="panel">
            <Subhead en="Design implication" zh="设计启示" />
            <h3><T en="What the evaluation implies" zh="评估说明了什么" /></h3>
            <ul>
              <li><T en="Route entry should stay recommendation-led because first-use demand is practical and guided." zh="路线入口应继续以推荐为主，因为首次使用需求明显偏向实用和被引导。" /></li>
              <li><T en="Important-place explanation is part of usefulness, not optional decoration." zh="重要地点解释不是装饰，而是实用性的一部分。" /></li>
              <li><T en="Campus support tools should stay in the main flow, not hidden behind secondary pages." zh="校园支持工具应保留在主流程中，而不是藏在次级页面里。" /></li>
              <li><T en="Memory and badges work best when they reinforce the practical core." zh="徽章和记忆沉淀在服务于实用核心时效果最好。" /></li>
            </ul>
          </article>
        </div>

        {/* Iterative refinement */}
        <SubSectionHead style={{ marginTop: 24 }} en="Iterative refinement" zh="迭代优化" descEn="One major change was moving from a browse-heavy start toward guided hybrid route entry." descZh="一个关键迭代是：从偏浏览式首页，转向更具引导性的混合路线入口。" />

        <div className="refinement-grid">
          <article className="panel">
            <Badge variant="warning" en="Before" zh="改动前" />
            <h4><T en="Browse-first entry created decision pressure" zh="先浏览再选择会带来更大决策压力" /></h4>
            <div className="mock-wireframe" aria-label="Reconstructed browse-heavy wireframe">
              <div className="wire-bar"></div>
              <div className="wire-pill-row">
                <div className="wire-pill"></div>
                <div className="wire-pill"></div>
                <div className="wire-pill"></div>
              </div>
              <div className="wire-card"></div>
              <div className="wire-card"></div>
              <div className="wire-card"></div>
            </div>
            <p className="mini-note" style={{ marginTop: 12 }}><T en="Reconstructed from the discarded early direction: users had to interpret route families before expressing their actual need." zh="这是根据被放弃的早期方向重构的示意：用户必须先理解路线家族，才能表达真实需求。" /></p>
          </article>
          <article className="panel">
            <Badge variant="good" en="After" zh="改动后" />
            <h4><T en="Hybrid route entry supports confidence and flexibility" zh="混合式入口同时支持信心建立与灵活性" /></h4>
            <div className="ref-image">
              <img src={amapRouteEntry} alt="Implemented hybrid route entry" />
            </div>
            <p className="mini-note" style={{ marginTop: 12 }}><T en="The implemented screen lets users start from recommendation, quick scenarios, and practical tools while still preserving route browsing." zh="实现后的页面允许用户从推荐、快捷场景和实用工具开始，同时保留路线浏览能力。" /></p>
          </article>
        </div>
      </div>
    </section>
  )
}

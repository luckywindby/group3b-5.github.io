import T from '../components/T'
import { SectionHead, SubSectionHead, Subhead, Proof } from '../components/UI'

const FEATURES = [
  { en: 'Route recommendation', zh: '路线推荐', d: ['Two questionnaire variants, identity/goal/time matching, and scored alternatives.', '双问卷变体、身份/目标/时长匹配与分数化备选路线。'] },
  { en: 'Route execution', zh: '路线执行', d: ['Stop tracking, progress marking, completion cards, and AMap handoff.', '站点跟踪、进度标记、完成卡片与 AMap 接力。'] },
  { en: 'Campus support tools', zh: '校园支持工具', d: ['Teaching buildings, service centres, printer directory, specials, and badges.', '教学楼、服务中心、打印机目录、Specials 与徽章系统。'] },
  { en: 'Reflective memory', zh: '记忆沉淀', d: ['Campus Memory templates, camera capture, AI-assisted copy, and PNG export.', 'Campus Memory 模板、相机拍摄、AI 辅助文案和 PNG 导出。'] },
  { en: 'Evidence instrumentation', zh: '证据采集机制', d: ['User Test Mode, route feedback, admin insights, and exportable evidence.', 'User Test Mode、路线反馈、后台洞察与可导出证据。'] },
  { en: 'Accessibility and mobile', zh: '无障碍与移动端', d: ['Bilingual UI, mobile panes, accessibility preferences, and HTTPS camera support.', '双语界面、移动端布局、无障碍偏好与 HTTPS 相机支持。'] },
]

const TEAM = [
  { name: 'Binyu Li', id: '2364567', resp: ['Questionnaire design and collection, main HCI innovation design, full system coding, mobile and web usability optimisation, deep visual refinement, poster writing, chart design, and all later poster/portfolio edits in this workspace.', '负责开发前调研问卷设计与数据收集、产品中所有主要人机交互创新点设计、完整系统开发、网页端与手机端友好性设计、网页深度优化与美化、海报文字与图表信息整理，以及此后在本工作区中对海报和网页内容的持续修改。'], note: ['Team record states this scope accounts for about 80% of the coursework completion.', '团队记录中说明该部分约占本次作业完成量的 80%。'] },
  { name: 'Haoyan Xu', id: '2359977', resp: ['Questionnaire publishing and organisation, Specials and Badges icon design, early webpage beautification, poster visual layout polish, Persona Snapshot content, and poster prototype production.', '负责问卷整理与发布、Specials 和 Badges 图标设计、网页初步美化、海报文字细节排版与美工、Persona Snapshot 部分，以及海报中 prototypes 的制作。'], note: ['Design and visual-support contribution.', '偏设计与视觉支持贡献。'] },
  { name: 'Shaozhen Tian', id: '2364327', resp: ['Geographic coordinate collection for map points, route verification, and poster reference search.', '负责网站地图点位经纬度信息采集、网页路线核对，以及海报参考文献查找。'], note: ['Route validation and references.', '偏路线核对与参考资料支持。'] },
  { name: 'Yifan Jin', id: '2361014', resp: ['Geographic coordinate collection for map points and route verification.', '负责网站地图点位经纬度采集与网页路线核对。'], note: ['Route validation support.', '偏路线核对支持。'] },
]

export default function ImplementationSection() {
  return (
    <section id="implementation">
      <div className="shell">
        <SectionHead en="4. Technical Implementation" zh="4. 技术实现" descEn="How the process translates into the real web app, architecture, deployment readiness, and team work split." descZh="说明过程设计如何落到真实 Web 应用、系统架构、部署能力和团队分工上。" />

        {/* Architecture */}
        <article className="panel">
          <Subhead en="System architecture" zh="系统架构" />
          <h3><T en="How the web app works" zh="这个 Web 应用如何工作" /></h3>
          <div className="architecture" style={{ marginTop: 16 }}>
            <div className="arch-node">
              <strong><T en="User on phone/browser" zh="手机/浏览器端用户" /></strong>
              <p><T en="Freshman, current student, or visitor enters from mobile-friendly route-entry points." zh="新生、在校生或访客通过移动端友好的入口进入系统。" /></p>
            </div>
            <div className="arch-arrow" aria-hidden="true">-&gt;</div>
            <div className="arch-node">
              <strong><T en="React + Vite frontend" zh="React + Vite 前端" /></strong>
              <p><T en="Start, Home, Recommendation, Route Detail, Buildings, Services, Printers, Memory, Profile, and Admin pages." zh="包含 Start、Home、Recommendation、Route Detail、Buildings、Services、Printers、Memory、Profile 与 Admin 页面。" /></p>
            </div>
            <div className="arch-arrow" aria-hidden="true">-&gt;</div>
            <div className="arch-node">
              <strong><T en="Node.js backend API" zh="Node.js 后端 API" /></strong>
              <p><T en="Auth, content, questionnaires, play profiles, admin evidence, usability records, and AI memory copy." zh="负责认证、内容、问卷、用户状态、后台证据、可用性记录与 AI 文案生成。" /></p>
            </div>
            <div className="arch-arrow" aria-hidden="true">-&gt;</div>
            <div className="arch-node">
              <strong><T en="Data and services" zh="数据与外部服务" /></strong>
              <p><T en="Postgres-ready storage, AMap handoff, DeepSeek, and local offline queue." zh="包含 Postgres-ready 数据存储、AMap 接力、DeepSeek 和本地离线队列。" /></p>
            </div>
          </div>
        </article>

        <div className="implementation-grid" style={{ marginTop: 18 }}>
          {/* Features */}
          <article className="panel">
            <Subhead en="High-fi prototype scope" zh="高保真原型范围" />
            <h3><T en="Implemented system features" zh="已实现功能" /></h3>
            <div className="feature-grid" style={{ marginTop: 14 }}>
              {FEATURES.map((f, i) => (
                <article className="feature-card" key={i}>
                  <h4><T en={f.en} zh={f.zh} /></h4>
                  <p><T en={f.d[0]} zh={f.d[1]} /></p>
                </article>
              ))}
            </div>
          </article>

          {/* Deployment */}
          <article className="panel">
            <Subhead en="Live URL status" zh="线上链接状态" />
            <h3><T en="Deployment note" zh="部署说明" /></h3>
            <p><T en="The workspace contains the full high-fidelity codebase and deployment configuration, but no public production URL is preserved in the repo snapshot." zh="当前工作区包含完整高保真代码和部署配置，但仓库快照中没有保留最终的公开线上地址。" /></p>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong><T en="Before assessment" zh="评测前需要补充" /></strong>
              <T en="Add the final public app URL here once the hosted version remains active during marking." zh="请在最终部署后，把可访问的线上地址补到这里，并确保评分期间保持可用。" />
            </div>
            <ul>
              <li><T en="Local secure mobile testing is documented in the README." zh="README 中已记录本地 HTTPS 手机测试方法。" /></li>
              <li><T en="The system is deployment-ready for a hosted Node + Postgres setup." zh="系统已具备 Node + Postgres 部署准备。" /></li>
              <li><T en="Poster and portfolio should point to the same final live URL." zh="海报和 portfolio 最终应指向同一个线上地址。" /></li>
            </ul>
            <div className="proof-row">
              <Proof variant="missing" en="Insert final public app URL" zh="请补充最终线上地址" />
            </div>
          </article>
        </div>

        {/* Contributions table */}
        <SubSectionHead style={{ marginTop: 24 }} en="Individual contributions" zh="个人贡献" descEn="The table below reflects the team record supplied for this submission." descZh="下表基于你提供的团队分工记录整理。" />

        <div className="table-wrap">
          <table aria-label="Individual contributions">
            <thead>
              <tr>
                <th><T en="Member" zh="成员" /></th>
                <th><T en="Student ID" zh="学号" /></th>
                <th><T en="Main responsibilities" zh="主要职责" /></th>
                <th><T en="Contribution note" zh="说明" /></th>
              </tr>
            </thead>
            <tbody>
              {TEAM.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.id}</td>
                  <td><T en={m.resp[0]} zh={m.resp[1]} /></td>
                  <td><T en={m.note[0]} zh={m.note[1]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

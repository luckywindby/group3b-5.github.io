import T from '../components/T'
import { Proof, Btn, Chip } from '../components/UI'
import posterPreview from '../assets/poster-preview.png'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <article className="card hero-copy">
          <div className="eyebrow">
            <T
              en="CPT208 Human-Centric Computing | Social Connectivity Track"
              zh="CPT208 Human-Centric Computing | Social Connectivity 赛道"
            />
          </div>
          <h1>Campus Compass</h1>
          <p className="hero-subtitle">
            <T
              en="A Human-Centred Campus Tour and Navigation Web App for XJTLU Students and Visitors"
              zh="一款面向西浦学生与访客、以人为中心的校园导览与导航 Web 应用"
            />
          </p>
          <p className="lede">
            <T
              en="This process portfolio documents how we turned campus navigation into a guided onboarding experience through iterative research, route alternatives, live prototyping, and early evaluation. The page is aligned with the coursework rubric and cross-checks poster claims against the implemented React + Node.js system in this workspace."
              zh={"本过程作品集记录了我们如何通过迭代研究、路线方案比较、在线高保真原型和早期评估，把“校园导航”转化为“校园入门引导体验”。页面内容严格对齐课程 rubric，并将海报中的结论与当前工作区中的 React + Node.js 实现进行交叉验证。"}
            />
          </p>

          <div className="proof-row" aria-label="Evidence legend / 证据图例">
            <Proof variant="code" en="Repo-backed evidence" zh="代码仓库可验证证据" />
            <Proof variant="poster" en="Poster-derived summary" zh="海报归纳数据" />
            <Proof variant="missing" en="External raw artifact to attach" zh="需补充的外部原始材料" />
          </div>

          <div className="hero-actions">
            <Btn href="#motivation" variant="primary" en="Read the process" zh="查看全过程" />
            <Btn
              href="./cpt208%20poster%20(2).pdf"
              variant="secondary"
              en="Open poster PDF"
              zh="打开海报 PDF"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </article>

        <div className="layout-2">
          <article className="card poster-card">
            <div className="poster-meta">
              <div>
                <strong>
                  <T en="Poster Snapshot" zh="海报预览" />
                </strong>
                <p className="meta-kicker">
                  <T
                    en="The current poster provides the main quantitative summaries reused below."
                    zh="当前海报提供了下文复用的主要量化结论。"
                  />
                </p>
              </div>
              <Proof variant="poster" en="Poster source" zh="海报来源" />
            </div>
            <div className="poster-frame">
              <img src={posterPreview} alt="Campus Compass poster preview / Campus Compass 海报预览" />
            </div>
          </article>

          <article className="card facts-card">
            <strong>
              <T en="Portfolio at a glance" zh="页面概览" />
            </strong>
            <div className="stats-grid">
              <div className="stat">
                <strong>6</strong>
                <span>
                  <T
                    en="Core routes across freshman, student, and visitor modes"
                    zh="覆盖新生、在校生、访客三类模式的 6 条核心路线"
                  />
                </span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>
                  <T
                    en="Primary user groups supported by the live app"
                    zh="系统支持的 3 类主要用户群体"
                  />
                </span>
              </div>
              <div className="stat">
                <strong>n = 94</strong>
                <span>
                  <T
                    en="First-year questionnaire respondents reported in the poster"
                    zh="海报中汇总的有效新生问卷样本量"
                  />
                </span>
              </div>
              <div className="stat">
                <strong>n = 21</strong>
                <span>
                  <T
                    en="Alpha route-entry submissions summarised in the poster"
                    zh="海报中归纳的 Alpha 阶段路线入口提交数"
                  />
                </span>
              </div>
            </div>
            <div className="chips">
              <span className="chip">React + Vite</span>
              <span className="chip">Node.js API</span>
              <span className="chip">AMap</span>
              <span className="chip">Campus Memory</span>
              <span className="chip">DeepSeek</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

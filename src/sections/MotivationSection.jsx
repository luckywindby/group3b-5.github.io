import T from '../components/T'
import { SectionHead, SubSectionHead, Subhead, Chip } from '../components/UI'

export default function MotivationSection() {
  return (
    <section id="motivation">
      <div className="shell">
        <SectionHead
          en="1. Motivation &amp; Research"
          zh="1. 项目动机与研究"
          descEn="Why we chose the track, what current solutions miss, and who the system is for."
          descZh="说明我们为何选择该赛道、现有方案缺失了什么，以及系统主要面向哪些用户。"
        />

        <div className="layout-2">
          {/* ---- The Why ---- */}
          <article className="panel">
            <Subhead en="The Why | around 200 words" zh="选择原因 | 约 200 词内容" />
            <h3><T en="Why We Chose the Social Connectivity Track" zh="为什么我们选择 Social Connectivity 赛道" /></h3>
            <p>
              <T
                en="We chose the Social Connectivity track because the first days on a large university campus are not only a navigation problem but a social transition. New XJTLU students often reach a destination only after uncertainty, repeated asking, or reliance on friends, while visitors and parents experience campus as a sequence of unfamiliar names with little context. We wanted to design something that helps people start conversations with campus itself: not just &quot;how do I get there?&quot;, but &quot;where should I begin, what matters first, and how do these places connect to student life?&quot; This track also matched what we observed in route verification and early requirements work. Respondents cared most about clear route guidance, introductions to important places, and integrated support resources, all of which are tied to confidence and belonging rather than efficiency alone. Campus Compass therefore treats navigation as a socially meaningful onboarding experience. It combines route recommendation, important-place explanation, bilingual support, service access, progress feedback, and Campus Memory reflection so users can build familiarity with the campus and feel more settled within it."
                zh={"我们选择 Social Connectivity 赛道，是因为大型大学校园中的“第一次到校体验”并不只是一个导航问题，更是一个社会性与适应性过渡过程。西浦新生往往需要在不确定、反复询问或依赖朋友帮助的情况下，才能到达目的地；而访客和家长看到的则是一连串陌生建筑名称，缺乏清晰语境。我们希望设计的不是一个只回答“怎么走”的工具，而是一个能帮助用户理解“从哪里开始、什么最重要、这些地点如何与校园生活连接起来”的系统。这个方向也与我们在路线核对、需求问卷和早期观察中的发现一致：用户最看重的并不是单纯效率，而是清晰路线引导、重要地点介绍以及常用校园资源整合。因此，Campus Compass 将导航重新定义为一种具有社会意义的校园入门体验。它把路线推荐、重要地点解释、双语支持、服务资源入口、进度反馈和 Campus Memory 纪念卡整合在一起，帮助用户逐步建立对校园的熟悉感、信心与归属感。"}
              />
            </p>
          </article>

          {/* ---- Problem framing ---- */}
          <article className="panel">
            <Subhead en="Problem framing" zh="问题界定" />
            <h3><T en="Motivation and gap" zh="项目动机与差距" /></h3>
            <p>
              <T
                en="Campus Compass was developed to support campus onboarding, not just campus navigation. For new students and visitors, the challenge is not only reaching a destination, but also knowing where to begin, which places matter first, and how to move through campus with confidence."
                zh={"Campus Compass 的目标并不只是“导航”，而是支持完整的校园 onboarding。对于新生和访客而言，真正的困难不只是到达某个地点，而是知道应该从哪里开始、哪些地点最重要，以及如何在校园中更有信心地行动。"}
              />
            </p>
            <p>
              <T
                en="Existing solutions support navigation, but not onboarding. Commercial maps provide live directions, official campus pages provide factual information, and academic systems improve route structure, yet few combine route priorities, service resources, bilingual guidance, and confidence-building in one mobile journey."
                zh={"现有方案可以支持“移动”，却无法真正支持“入门”。商业地图提供实时路线，学校官网提供事实信息，学术方案则更关注路线结构与可用性；但几乎没有系统能在同一个移动体验中同时整合路线优先级、服务资源、双语引导和建立信心的机制。"}
              />
            </p>
            <div className="chips">
              <Chip en="Need 1: clear route guidance" zh="需求 1：清晰的路线引导" />
              <Chip en="Need 2: important-place introduction" zh="需求 2：重要地点介绍" />
              <Chip en="Need 3: integrated campus resources" zh="需求 3：整合常用校园资源" />
            </div>
          </article>
        </div>

        {/* ---- Gap Review ---- */}
        <SubSectionHead
          style={{ marginTop: 24 }}
          en="Gap Review | 4 academic papers and 4 commercial products"
          zh="差距分析 | 4 篇学术论文与 4 个商业产品"
          descEn="Instead of full summaries, each source is framed by what it did well and what it missed."
          descZh={'\u8fd9\u91cc\u4e0d\u505a\u5b8c\u6574\u6587\u732e\u7efc\u8ff0\uff0c\u800c\u662f\u805a\u7126\u6bcf\u4e2a\u6765\u6e90\u201c\u505a\u5f97\u597d\u7684\u70b9\u201d\u548c\u201c\u9057\u6f0f\u7684\u70b9\u201d\u3002'}
        />

        <div className="layout-2">
          <article className="panel">
            <Subhead en="Academic papers" zh="学术论文" />
            <div className="research-grid">
              {[
                {
                  title: 'Paetow et al. (2021)',
                  items: [
                    { en: 'Did well: requirement-driven campus navigation design.', zh: '优点：以需求为起点的校园导航设计。' },
                    { en: 'Did well: kept the university context central.', zh: '优点：始终围绕大学校园场景展开。' },
                    { en: 'Missed: less focus on emotion, onboarding, and belonging.', zh: '不足：对情感、入门过程和归属感关注不足。' },
                  ],
                },
                {
                  title: 'Olaleye et al. (2024)',
                  items: [
                    { en: 'Did well: accessibility and inclusive navigation support.', zh: '优点：重视无障碍与包容性导航。' },
                    { en: 'Did well: usability taken seriously as evaluation evidence.', zh: '优点：把可用性评估作为重要证据。' },
                    { en: 'Missed: limited playful motivation and mixed-user onboarding.', zh: '不足：缺少趣味性激励和混合用户 onboarding 的考虑。' },
                  ],
                },
                {
                  title: 'Tahir & Krogstie (2023)',
                  items: [
                    { en: 'Did well: studied workload and hesitation in campus wayfinding.', zh: '优点：关注校园寻路中的认知负担与犹豫。' },
                    { en: 'Did well: compared aids in real campus tasks.', zh: '优点：在真实校园任务中比较导航辅助方式。' },
                    { en: 'Missed: little onboarding guidance and service-resource integration.', zh: '不足：缺少 onboarding 指导和服务资源整合视角。' },
                  ],
                },
                {
                  title: 'Li et al. (2021)',
                  items: [
                    { en: 'Did well: explored AR-enhanced campus navigation possibilities.', zh: '优点：探索了 AR 强化校园导航的可能性。' },
                    { en: 'Did well: highlighted richer spatial interaction.', zh: '优点：强调更丰富的空间交互体验。' },
                    { en: 'Missed: limited practical onboarding and reflection loop.', zh: '不足：实用入门引导和反思闭环不足。' },
                  ],
                },
              ].map((paper) => (
                <article className="feature-card" key={paper.title}>
                  <h4>{paper.title}</h4>
                  <ul>
                    {paper.items.map((item, i) => (
                      <li key={i}><T en={item.en} zh={item.zh} /></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>

          <article className="panel">
            <Subhead en="Commercial products" zh="商业产品" />
            <div className="research-grid">
              {[
                {
                  title: 'AMap',
                  items: [
                    { en: 'Did well: reliable live route handoff and familiar mobile patterns.', zh: '优点：实时导航接力可靠，移动端交互成熟。' },
                    { en: 'Missed: no newcomer prioritisation or campus explanation.', zh: '不足：没有新手优先级和校园语境解释。' },
                  ],
                },
                {
                  title: 'Google Maps',
                  items: [
                    { en: 'Did well: strong generic A-to-B navigation model.', zh: '优点：通用 A-to-B 导航能力非常强。' },
                    { en: 'Missed: campus touring becomes a plain street-map task.', zh: '不足：校园导览会被简化成普通街道地图任务。' },
                  ],
                },
                {
                  title: 'MazeMap',
                  items: [
                    { en: 'Did well: campus-specific indoor-outdoor orientation.', zh: '优点：更接近校园场景的室内外衔接导航。' },
                    { en: 'Missed: weaker emotional onboarding and playful reflection.', zh: '不足：在情感 onboarding 和趣味反思方面较弱。' },
                  ],
                },
                {
                  title: 'Apple Maps',
                  items: [
                    { en: 'Did well: clean mobile-first route visibility.', zh: '优点：移动端路线可视化清晰、干净。' },
                    { en: 'Missed: no service, route-family, or campus-memory layers.', zh: '不足：没有服务资源、路线家族和记忆沉淀层。' },
                  ],
                },
              ].map((product) => (
                <article className="feature-card" key={product.title}>
                  <h4>{product.title}</h4>
                  <ul>
                    {product.items.map((item, i) => (
                      <li key={i}><T en={item.en} zh={item.zh} /></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </div>

        {/* ---- Stakeholders ---- */}
        <SubSectionHead
          style={{ marginTop: 24 }}
          en="Stakeholders and persona snapshots"
          zh="利益相关者与 Persona 快照"
          descEn="Primary and secondary users are grounded in the live route modes and support tools."
          descZh="主要与次要用户的定义基于系统中已实现的路线模式和支持工具。"
        />

        <div className="layout-2">
          <article className="panel persona-card">
            <div className="persona-meta">
              <strong><T en="Lina | first-year student" zh="Lina | 大一新生" /></strong>
              <span className="persona-role"><T en="Primary user" zh="主要用户" /></span>
            </div>
            <p>
              <T
                en="Lina has just arrived at XJTLU. She knows a few building names, but not how classrooms, services, and daily campus tasks connect. She wants one mobile entry point that helps her choose the right route quickly and lowers the fear of getting lost."
                zh="Lina 刚到西浦。她知道少量建筑名称，但还不理解教室、服务点和日常校园任务之间的关系。她希望有一个统一的移动入口，帮助自己快速选对路线，并降低迷路焦虑。"
              />
            </p>
            <ul>
              <li><T en="Goal: find classrooms and essential support points fast." zh="目标：快速找到教室和核心服务点。" /></li>
              <li><T en="Frustration: campus jargon, scattered resources, too many choices." zh="痛点：校园术语陌生，资源分散，入口过多。" /></li>
              <li><T en="Needs: guided route entry, place explanation, visible progress." zh="需求：引导式入口、地点解释、清晰进度反馈。" /></li>
            </ul>
          </article>

          <article className="panel persona-card">
            <div className="persona-meta">
              <strong><T en="Mr. Chen | visiting parent" zh="Mr. Chen | 来访家长" /></strong>
              <span className="persona-role"><T en="Secondary user" zh="次要用户" /></span>
            </div>
            <p>
              <T
                en="Mr. Chen is visiting campus for the first time and wants a short, reassuring tour that explains landmarks without requiring prior knowledge of building codes. He values bilingual cues, concise timing, and a route that feels easy to follow."
                zh="Mr. Chen 第一次来西浦，希望有一条简洁、令人安心的访客路线，不需要预先理解建筑代号也能看懂。他重视双语提示、清晰时长和容易跟随的路线结构。"
              />
            </p>
            <ul>
              <li><T en="Goal: understand the campus story in a manageable route." zh="目标：通过一条可控时长的路线理解校园整体。" /></li>
              <li><T en="Frustration: unfamiliar layout and no sense of priorities." zh="痛点：布局陌生，不知道什么最值得先看。" /></li>
              <li><T en="Needs: bilingual guidance, concise tour, clear closure." zh="需求：双语引导、精简导览、明确结束反馈。" /></li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

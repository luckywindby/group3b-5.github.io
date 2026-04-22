import T from '../components/T'
import { SectionHead, SubSectionHead, Subhead, Proof } from '../components/UI'
import journeyMap from '../assets/journey-map.png'
import fbBuilding from '../assets/fb-building.png'
import cbBuilding from '../assets/cb-building.png'
import hsBuilding from '../assets/hs-building.png'
import aiCafe from '../assets/ai-cafe.png'
import campusLake from '../assets/campus-lake.png'

const JOURNEY_ROWS = [
  {
    stage: { en: '1. Enter and choose a route', zh: '1. 进入系统并选择路线' },
    action: { en: 'Open Campus Compass, browse quick entries, and tap "Find my best route" or practical tools.', zh: '打开 Campus Compass，浏览快捷入口，并点击"Find my best route"或实用工具入口。' },
    thinking: { en: '"I need help quickly, but I do not want a complicated start."', zh: '"我想尽快得到帮助，但不想一开始就被复杂流程卡住。"' },
    feeling: { en: 'Curious, but slightly anxious.', zh: '好奇，但有点紧张。' },
    pain: { en: 'Users may not know where to begin or may feel overloaded by too many route choices.', zh: '用户不知道从哪里开始，或被过多路线选项压倒。' },
    opportunity: { en: 'Guest access, quick actions, and recommendation-led entry reduce first-use friction.', zh: '游客模式、快捷入口和推荐式入口可以降低首次使用阻力。' },
  },
  {
    stage: { en: '2. Get a recommendation', zh: '2. 获取推荐路线' },
    action: { en: 'Choose identity, goal, and time budget, then review the suggested route and alternatives.', zh: '选择身份、目标和时间预算，再查看推荐路线及备选方案。' },
    thinking: { en: '"Is this route suitable for today\'s class or service need?"', zh: '"这条路线真的适合我今天的上课或办事需求吗？"' },
    feeling: { en: 'Uncertain, then more reassured.', zh: '先不确定，随后逐渐安心。' },
    pain: { en: 'Users struggle to judge route relevance, duration, and support coverage.', zh: '用户难以判断路线是否合适、是否太长、是否覆盖服务点。' },
    opportunity: { en: 'Show route purpose, time, stops, and recommendation reasons clearly.', zh: '清晰展示路线目的、时长、停靠点和推荐理由。' },
  },
  {
    stage: { en: '3. Follow the route', zh: '3. 执行路线' },
    action: { en: 'Open Route Detail, track stops, switch to AMap if needed, and mark locations visited.', zh: '打开 Route Detail，按站点前进，必要时切换到 AMap，并标记已到访地点。' },
    thinking: { en: '"Am I going the right way? What is the next stop?"', zh: '"我走对了吗？下一站在哪里？"' },
    feeling: { en: 'Anxiety decreases; confidence grows.', zh: '焦虑下降，信心上升。' },
    pain: { en: 'Entrances, transitions, and route continuity can still be confusing.', zh: '入口、路径衔接和路线连续性仍可能令人困惑。' },
    opportunity: { en: 'Use road-aligned guidance, visible progress, bilingual labels, and stop explanations.', zh: '用道路对齐导航、清晰进度、双语标签和站点解释维持方向感。' },
  },
  {
    stage: { en: '4. Complete and reflect', zh: '4. 完成并反馈' },
    action: { en: 'Unlock completion feedback, submit route feedback, and review what was useful.', zh: '查看完成反馈、提交路线评价，并回顾哪些信息最有帮助。' },
    thinking: { en: '"This helped, but some steps could still be clearer."', zh: '"它确实有帮助，但有些步骤还能更清楚。"' },
    feeling: { en: 'Accomplished, more willing to continue.', zh: '有成就感，也更愿意继续使用。' },
    pain: { en: 'Purely functional completion can feel abrupt and disposable.', zh: '如果只是"结束导航"，整个体验会显得突兀且缺少记忆点。' },
    opportunity: { en: 'Completion cards, badges, and feedback prompts provide closure.', zh: '完成卡片、徽章和反馈入口能带来更强的收尾感。' },
  },
  {
    stage: { en: '5. Save memory', zh: '5. 留下记忆' },
    action: { en: 'Create a Campus Memory card, refine copy, export PNG, and review saved history.', zh: '制作 Campus Memory 卡片、润色文案、导出 PNG，并查看历史记录。' },
    thinking: { en: '"This was not just wayfinding; it became part of my first campus story."', zh: '"这不只是一次找路，它成了我第一次校园经历的一部分。"' },
    feeling: { en: 'Relaxed, proud, more connected.', zh: '放松、自豪，也更有连接感。' },
    pain: { en: 'Without reflection, the campus journey is easy to forget.', zh: '如果没有反思与沉淀，这段校园体验很快会被遗忘。' },
    opportunity: { en: 'Postcard generation turns navigation into memory, identity, and belonging.', zh: '纪念卡生成把导航转化为记忆、身份认同与归属感。' },
  },
]

const GALLERY = [
  { src: fbBuilding, alt: 'FB building observation', nameEn: 'FB teaching cluster', nameZh: 'FB 教学楼群', noteEn: 'Used to validate first-year classroom route entry.', noteZh: '用于验证新生教学楼路线入口是否合理。' },
  { src: cbBuilding, alt: 'CB building observation', nameEn: 'CB services hub', nameZh: 'CB 服务中心聚合区', noteEn: 'Used to verify service-point relevance.', noteZh: '用于核对服务点在路线中的重要性。' },
  { src: hsBuilding, alt: 'HS building observation', nameEn: 'HS route transition', nameZh: 'HS 路线衔接点', noteEn: 'Used to check visitor-route continuity.', noteZh: '用于核对访客路线的连贯性。' },
  { src: aiCafe, alt: 'AI Cafe observation', nameEn: 'AI Cafe landmark', nameZh: 'AI Cafe 地标', noteEn: 'Supports the contemporary visitor-story layer.', noteZh: '用于支撑更现代化的访客叙事层。' },
  { src: campusLake, alt: 'Campus lake observation', nameEn: 'Campus Lake pause point', nameZh: '校园湖停留点', noteEn: 'Used to validate reflection-oriented route moments.', noteZh: '用于验证更适合反思和记忆沉淀的停留节点。' },
]

export default function RequirementsSection() {
  return (
    <section id="requirements">
      <div className="shell">
        <SectionHead
          en="2. User Requirements"
          zh="2. 用户需求"
          descEn="Pain points are translated into journey stages, playful must-haves, and field evidence."
          descZh="把用户痛点转译为旅程阶段、趣味性刚需和现场证据。"
        />

        <div className="journey-grid">
          <article className="figure-card">
            <figure>
              <img src={journeyMap} alt="Journey map for first-year onboarding" />
              <figcaption>
                <T
                  en="Journey map used to frame the first-use flow from route entry to memory and belonging."
                  zh="用于梳理从路线入口到纪念沉淀、归属感建立的首次使用旅程图。"
                />
              </figcaption>
            </figure>
          </article>

          <article className="panel">
            <Subhead en="Journey synthesis" zh="旅程提炼" />
            <h3><T en="Pain points and opportunities" zh="痛点与设计机会" /></h3>
            <ul>
              <li><T en="Before navigation, users struggle most with where to begin and which route matters first." zh="导航前最大的困难是：从哪里开始，以及哪条路线最重要。" /></li>
              <li><T en="During navigation, unfamiliar building codes and entrances create hesitation." zh="导航中，陌生建筑代号和入口会引发犹豫。" /></li>
              <li><T en="After navigation, closure matters: completion, feedback, and memory make the route meaningful." zh="导航后，完成感很重要：完成反馈、评价和记忆沉淀会让路线更有意义。" /></li>
            </ul>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong><T en="The opportunity" zh="设计机会" /></strong>
              <T
                en="Reduce decision pressure before movement, make recommendation transparent, keep mobile progress visible, and extend arrival into reflection and belonging."
                zh={'\u5728\u884c\u52a8\u524d\u964d\u4f4e\u51b3\u7b56\u538b\u529b\uff0c\u8ba9\u63a8\u8350\u66f4\u900f\u660e\uff0c\u4fdd\u8bc1\u79fb\u52a8\u7aef\u8fdb\u5ea6\u53ef\u89c1\uff0c\u5e76\u628a\u201c\u5230\u8fbe\u201d\u5ef6\u4f38\u4e3a\u201c\u53cd\u601d\u4e0e\u5f52\u5c5e\u611f\u5efa\u7acb\u201d\u3002'}
              />
            </div>
          </article>
        </div>

        {/* Journey table */}
        <div className="table-wrap" style={{ marginTop: 18 }}>
          <table aria-label="User journey table">
            <thead>
              <tr>
                <th><T en="Stage" zh="阶段" /></th>
                <th><T en="Action / Doing" zh="行动" /></th>
                <th><T en="Thinking" zh="想法" /></th>
                <th><T en="Feeling" zh="感受" /></th>
                <th><T en="Pain point" zh="痛点" /></th>
                <th><T en="Opportunity" zh="机会点" /></th>
              </tr>
            </thead>
            <tbody>
              {JOURNEY_ROWS.map((row, i) => (
                <tr key={i}>
                  <td><T en={row.stage.en} zh={row.stage.zh} /></td>
                  <td><T en={row.action.en} zh={row.action.zh} /></td>
                  <td><T en={row.thinking.en} zh={row.thinking.zh} /></td>
                  <td><T en={row.feeling.en} zh={row.feeling.zh} /></td>
                  <td><T en={row.pain.en} zh={row.pain.zh} /></td>
                  <td><T en={row.opportunity.en} zh={row.opportunity.zh} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Playful must-haves */}
        <SubSectionHead
          style={{ marginTop: 24 }}
          en="Playful must-haves"
          zh={'"具备趣味性"必须满足的条件'}
          descEn="The product must remain practical first, but still feel playful and human-centred."
          descZh="产品必须以实用为核心，同时具有趣味性和人本关怀。"
        />

        <div className="requirements-grid">
          {[
            { en: '1. Visible progress and closure', zh: '1. 可见的进度与完成感', dEn: 'Playfulness should include route completion, progress feedback, and a clear ending.', dZh: '趣味性不只是装饰，而应包括路线进度、完成反馈和明确的结束仪式感。' },
            { en: '2. Meaningful discovery', zh: '2. 有意义的探索', dEn: 'Users should discover stories, landmarks, seasonal elements, or hidden spots that make the campus memorable.', dZh: '用户应该能发现故事、地标、季节性内容或 hidden spots，使校园体验更可记忆。' },
            { en: '3. Lightweight rewards and memory', zh: '3. 轻量奖励与记忆沉淀', dEn: 'Badges, postcard export, and route history should reinforce motivation without overwhelming users.', dZh: '徽章、明信片导出和路线历史应强化动力，而不是增加额外负担。' },
          ].map((req, i) => (
            <article className="requirement-card" key={i}>
              <strong><T en={req.en} zh={req.zh} /></strong>
              <p><T en={req.dEn} zh={req.dZh} /></p>
            </article>
          ))}
        </div>

        {/* Evidence of life */}
        <SubSectionHead
          style={{ marginTop: 24 }}
          en="Evidence of Life"
          zh="现场证据"
          descEn="The repo preserves route-verification and place-observation assets. Replace or extend them with raw interview photos or clips if your group stored them elsewhere."
          descZh="仓库里保留了路线核对和现场观察素材。如果小组还有仓库外保存的访谈照片或短视频，请在最终提交前替换或补充。"
        >
          <Proof variant="missing" en="Add raw interview/video files if available" zh="如有原始访谈/视频，请补充" />
        </SubSectionHead>

        <div className="gallery">
          {GALLERY.map((item, i) => (
            <article className="gallery-card" key={i}>
              <img src={item.src} alt={item.alt} />
              <div>
                <strong><T en={item.nameEn} zh={item.nameZh} /></strong>
                <p className="mini-note"><T en={item.noteEn} zh={item.noteZh} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import T from '../components/T'
import { SectionHead, Subhead } from '../components/UI'

export default function ReflectionSection() {
  return (
    <section id="reflection">
      <div className="shell">
        <SectionHead en="6. Final Reflection" zh="6. 最终反思" descEn="Outcome, limitations, future work, ethics, AI disclosure, and references." descZh="包括项目结果、局限、未来工作、伦理问题、AI 披露与参考文献。" />

        <div className="reflection-grid">
          <article className="panel">
            <Subhead en="Outcome" zh="结果" />
            <h3><T en="What the project achieved" zh="项目取得了什么" /></h3>
            <ul>
              <li><T en="Delivered a route-centred, human-centred onboarding web app rather than a generic map tool." zh="交付了一个以路线为中心、以人为中心的校园 onboarding Web 应用，而非普通地图工具。" /></li>
              <li><T en="Connected recommendation, route execution, service access, badges, and Campus Memory in one system." zh="把路线推荐、路线执行、服务入口、徽章和 Campus Memory 整合进一个系统中。" /></li>
              <li><T en="Showed practical feasibility through a working full-stack prototype with evidence capture." zh="通过可运行的全栈原型与证据采集机制验证了项目的可行性。" /></li>
            </ul>
          </article>
          <article className="panel">
            <Subhead en="Limitations" zh="局限" />
            <h3><T en="What is still constrained" zh="当前仍受限的地方" /></h3>
            <ul>
              <li><T en="The current evidence base is still modest, so findings remain early signals." zh="当前证据规模仍然有限，因此结论仍属于早期信号。" /></li>
              <li><T en="The route library currently centres on six core routes." zh="目前路线库主要集中在 6 条核心路线。" /></li>
              <li><T en="The playful layer is lightweight and lacks long-term validation." zh="趣味层设计仍偏轻量，缺乏长期使用验证。" /></li>
            </ul>
          </article>
          <article className="panel">
            <Subhead en="Future work" zh="未来工作" />
            <h3><T en="What should come next" zh="下一步可以做什么" /></h3>
            <ul>
              <li><T en="Run broader usability testing with more real users and clearer A/B evidence." zh="开展更大规模的真实用户可用性测试，并形成更清晰的 A/B 证据。" /></li>
              <li><T en="Expand route coverage, support scenarios, and user-generated exploration." zh="扩展路线覆盖面、支持场景和用户共创内容。" /></li>
              <li><T en="Develop richer camera-based or AR-style memory interactions while keeping the product lightweight." zh="在保持轻量的前提下，继续发展更丰富的相机式或 AR 风格记忆交互。" /></li>
            </ul>
          </article>
        </div>

        <div className="layout-2" style={{ marginTop: 18 }}>
          <article className="panel">
            <Subhead en="Social and ethical implications" zh="社会与伦理影响" />
            <h3><T en="Human-centred responsibilities" zh="以人为中心的责任" /></h3>
            <ul>
              <li><T en="Navigation records can reveal movement habits, so profile and route history should be handled carefully." zh="导航记录会暴露行动习惯，因此用户档案和路线历史应被谨慎处理。" /></li>
              <li><T en="The system should support users without becoming overly prescriptive or replacing spatial learning entirely." zh="系统应当提供支持，但不能过度替代用户自身的空间学习过程。" /></li>
              <li><T en="Bilingual and accessibility design remain important to fairness across diverse campus users." zh="双语与无障碍设计对于不同背景校园用户的公平性仍然至关重要。" /></li>
              <li><T en="Visitor storytelling should remain respectful and accurate rather than superficial decoration." zh="面向访客的校园叙事应保持尊重与准确，而不是流于表面包装。" /></li>
            </ul>
          </article>
          <article className="panel">
            <Subhead en="AI disclosure" zh="AI 使用披露" />
            <h3><T en="How AI was used" zh="AI 在项目中的使用方式" /></h3>
            <ul>
              <li><T en="DeepSeek is integrated into Campus Memory for AI-assisted postcard copy generation and refinement." zh="DeepSeek 被集成到 Campus Memory 中，用于纪念卡文案生成与润色。" /></li>
              <li><T en="Poster references record ChatGPT and Dreamina AI as support tools for prompt support and visual assets." zh="海报参考文献中记录了 ChatGPT 和 Dreamina AI，分别用于 prompt 支持和视觉素材辅助。" /></li>
              <li><T en="All AI outputs still require human review for tone, accuracy, and campus appropriateness." zh="所有 AI 生成内容都必须经过人工审查，以确保语气、准确性和校园语境适配。" /></li>
              <li><T en="AI assists design reflection; it does not replace fieldwork, route verification, or real-user evaluation." zh="AI 只应辅助设计反思，不能替代现场调研、路线核对或真实用户评估。" /></li>
            </ul>
          </article>
        </div>

        <div className="layout-2" style={{ marginTop: 18 }}>
          <article className="panel">
            <Subhead en="Academic references" zh="学术参考文献" />
            <ul>
              <li>T. Paetow, J. Wichmann, and M. Wissotzki, &quot;Campus-Navigation-System Design for Universities: A Method Approach for Wismar Business School,&quot; in <em>Human Centred Intelligent Systems</em>, Singapore: Springer Singapore, 2021, pp. 3-12.</li>
              <li>S. B. Olaleye, B. A. Adebiyi, A. Abdulsalaam, F. C. Nwosu, A. O. Adeyanju, H. M. Ambi, and C. Omolayo, &quot;Evaluating the usability and effectiveness of a special education campus navigation system for students with visual impairment,&quot; <em>Journal of Intelligent Systems and Control</em>, 2024, pp. 84-92, doi: 10.56578/jisc030202.</li>
              <li>R. Tahir and J. Krogstie, &quot;Impact of navigation aid and spatial ability skills on wayfinding performance and workload in indoor-outdoor campus navigation: Challenges and design,&quot; <em>Applied Sciences</em>, vol. 13, no. 17, Art. no. 9508, 2023, doi: 10.3390/app13179508.</li>
              <li>Z. Li, G. Qi, W. Hu, X. Ma, and Q. Guo, &quot;Application of augmented reality in campus navigation,&quot; in <em>2021 6th International Conference on Intelligent Computing and Signal Processing (ICSP)</em>, 2021, pp. 889-893, doi: 10.1109/ICSP51882.2021.9408770.</li>
            </ul>
          </article>
          <article className="panel">
            <Subhead en="Commercial / AI / benchmark references" zh="商业 / AI / 参考站点来源" />
            <ul>
              <li><T en="Commercial products benchmarked: AMap, Google Maps, MazeMap, and Apple Maps." zh="商业产品对照：AMap、Google Maps、MazeMap 和 Apple Maps。" /></li>
              <li><T en="AI tools disclosed in the poster: ChatGPT (GPT-5.3) and Dreamina AI, both accessed on 2026-04-10." zh="海报中披露的 AI 工具：ChatGPT（GPT-5.3）和 Dreamina AI，访问日期均为 2026-04-10。" /></li>
              <li><T en="Portfolio layout benchmarking reviewed from the GitHub Pages examples provided in the briefing conversation." zh="Portfolio 版式参考来自前面对话中提供的多个 GitHub Pages 示例站点。" /></li>
              <li><T en="High-fi evidence is grounded in the implemented codebase and the poster PDF in this folder." zh="高保真证据主要来自当前工作区代码和本目录中的海报 PDF。" /></li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

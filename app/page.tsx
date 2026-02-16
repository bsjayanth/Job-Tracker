export default function Home() {
  return (
    <div className="kpb-app">
      {/* Top Bar */}
      <header className="kpb-topbar">
        <div className="kpb-topbar__left">
          <span className="kpb-topbar__project">
            KodNest Premium Build System
          </span>
        </div>
        <div className="kpb-topbar__center">
          <span className="kpb-topbar__progress">Step 1 / 5</span>
        </div>
        <div className="kpb-topbar__right">
          <span className="kpb-badge kpb-badge--status kpb-badge--status-in-progress">
            In Progress
          </span>
        </div>
      </header>

      {/* Context Header */}
      <section className="kpb-context">
        <h1 className="kpb-context__title">
          Establish your build workspace shell
        </h1>
        <p className="kpb-context__subtitle">
          Define the calm, intentional layout that every KodNest build screen
          will share before adding any product features.
        </p>
      </section>

      {/* Main Layout: Primary Workspace + Secondary Panel */}
      <main className="kpb-main">
        <section className="kpb-layout">
          {/* Primary Workspace (70%) */}
          <div className="kpb-primary">
            <article className="kpb-card">
              <header className="kpb-card__header">
                <h2 className="kpb-card__title">Primary workspace canvas</h2>
                <p className="kpb-card__subtitle">
                  This area hosts the main interaction for the current step. Use
                  it for focused configuration, review, or execution flows.
                </p>
              </header>
              <div className="kpb-card__body">
                <div className="kpb-demo-row">
                  <div className="kpb-demo-block">
                    <h3 className="kpb-demo-block__title">Actions</h3>
                    <div className="kpb-demo-actions">
                      <button className="kpb-button kpb-button--primary">
                        Primary action
                      </button>
                      <button className="kpb-button kpb-button--secondary">
                        Secondary action
                      </button>
                    </div>
                  </div>

                  <div className="kpb-demo-block">
                    <h3 className="kpb-demo-block__title">Input pattern</h3>
                    <label className="kpb-field">
                      <span className="kpb-field__label">Field label</span>
                      <input
                        className="kpb-input"
                        type="text"
                        placeholder="Calm, descriptive placeholder"
                      />
                      <span className="kpb-field__hint">
                        Explain what belongs here in one short line.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="kpb-demo-row">
                  <div className="kpb-demo-block">
                    <h3 className="kpb-demo-block__title">Empty state</h3>
                    <div className="kpb-empty">
                      <div className="kpb-empty__title">
                        Nothing configured in this workspace yet
                      </div>
                      <div className="kpb-empty__body">
                        Use this space to introduce the next calm, clear step.
                        Offer a single primary action to move forward.
                      </div>
                      <button className="kpb-button kpb-button--primary">
                        Start this step
                      </button>
                    </div>
                  </div>

                  <div className="kpb-demo-block">
                    <h3 className="kpb-demo-block__title">Error state</h3>
                    <div className="kpb-alert kpb-alert--error">
                      <div className="kpb-alert__title">
                        {"We couldn't validate this configuration."}
                      </div>
                      <div className="kpb-alert__body">
                        Review the highlighted fields. When everything looks
                        correct, try saving again. If the issue persists, copy
                        the details and share them with your team.
                      </div>
                      <button className="kpb-button kpb-button--secondary">
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary Panel (30%) */}
          <aside className="kpb-secondary">
            <section className="kpb-card kpb-card--secondary">
              <header className="kpb-card__header">
                <h2 className="kpb-card__title">Step guidance</h2>
                <p className="kpb-card__subtitle">
                  Use this panel to clarify intent, provide a prompt, and log
                  what happened in this step.
                </p>
              </header>

              <div className="kpb-card__body kpb-card__body--stack">
                <div className="kpb-secondary__section">
                  <h3 className="kpb-secondary__section-title">Prompt</h3>
                  <div className="kpb-prompt">
                    <p className="kpb-prompt__body">
                      Create or refine the primary workspace for this step
                      without adding product logic. Keep the layout calm,
                      intentional, and consistent with the KodNest shell.
                    </p>
                  </div>
                </div>

                <div className="kpb-secondary__section">
                  <h3 className="kpb-secondary__section-title">Actions</h3>
                  <div className="kpb-secondary__actions">
                    <button className="kpb-button kpb-button--primary kpb-button--full">
                      Copy
                    </button>
                    <button className="kpb-button kpb-button--secondary kpb-button--full">
                      Build in Lovable
                    </button>
                    <button className="kpb-button kpb-button--secondary kpb-button--full">
                      It Worked
                    </button>
                    <button className="kpb-button kpb-button--secondary kpb-button--full">
                      Error
                    </button>
                    <button className="kpb-button kpb-button--secondary kpb-button--full">
                      Add Screenshot
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </main>

      {/* Proof Footer */}
      <footer className="kpb-footer">
        <div className="kpb-footer__inner">
          <div className="kpb-footer__item">
            <label className="kpb-check">
              <input type="checkbox" className="kpb-check__input" />
              <span className="kpb-check__label">UI Built</span>
            </label>
            <input
              type="text"
              className="kpb-input kpb-input--proof"
              placeholder="Link, note, or short proof of UI"
            />
          </div>

          <div className="kpb-footer__item">
            <label className="kpb-check">
              <input type="checkbox" className="kpb-check__input" />
              <span className="kpb-check__label">Logic Working</span>
            </label>
            <input
              type="text"
              className="kpb-input kpb-input--proof"
              placeholder="Describe the verification or share a link"
            />
          </div>

          <div className="kpb-footer__item">
            <label className="kpb-check">
              <input type="checkbox" className="kpb-check__input" />
              <span className="kpb-check__label">Test Passed</span>
            </label>
            <input
              type="text"
              className="kpb-input kpb-input--proof"
              placeholder="Reference to test run or result"
            />
          </div>

          <div className="kpb-footer__item">
            <label className="kpb-check">
              <input type="checkbox" className="kpb-check__input" />
              <span className="kpb-check__label">Deployed</span>
            </label>
            <input
              type="text"
              className="kpb-input kpb-input--proof"
              placeholder="Environment, URL, or deployment note"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

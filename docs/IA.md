# Information Architecture v3 — anaghatodalbagi.com

## Format

Single page, one column, five quiet sections. No nav bar — a small fixed "Contact" link top-right. Total scroll ≈ 5 viewports. The takeaway is available at every glance:

- **Glance 1 (0–10 s):** name + "Product leader who still ships." + the mist. Who she is.
- **Glance 2 (one scroll):** four shipped things, each with a Microsoft link. Why to believe her.
- **Glance 3 (one more):** the ledger — Suki (seed, 5th hire) → Duetto → Commure → Microsoft. The arc.
- Everything after is texture: her on stage, who she is off stage, how to reach her.

## Sections

### 1. Hero
- Mist canvas over paper. **Anagha Todalbagi**. Tagline: **Product leader who still ships.**
- One supporting line (`--gray`): "12 years across engineering and product — 5th hire at a seed-stage AI startup to GA launches at Microsoft."
- Two links: anagha.todalbagi@gmail.com · LinkedIn ↗. Nothing else.

### 2. Selected work — label: WORK
Four ledger rows (title / one line / proof link, hairline-separated):
1. **Mirroring for Azure SQL Database → Microsoft Fabric** — Took it private preview → public preview → GA → GA+; operational data, connected to analytics and AI. → [Microsoft GA announcement](https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-the-general-availability-ga-of-mirroring-for-azure-sql-database-in-mi/4303)
2. **Fabric Graph** — Enterprise relationship and context modeling for analytics and AI, through GA. → [Fabric IQ announcement](https://blog.fabric.microsoft.com/en-US/blog/from-data-platform-to-intelligence-platform-introducing-microsoft-fabric-iq/)
3. **Real-Time Intelligence** — Current: Real-Time Hub — stream discovery, processing, alerting. → [Real-Time Hub docs](https://learn.microsoft.com/en-us/fabric/real-time-hub/real-time-hub-overview)
4. **Azure SQL portfolio** — Data API Builder, T-SQL features, Azure SQL for Startups. → [Data API Builder docs](https://learn.microsoft.com/en-us/azure/data-api-builder/)

### 3. Career — label: CAREER
Ledger, reverse-chronological (ambrosino pattern), stage in small caps after the years:
- **Microsoft** — Product Manager, Cloud & AI · 2023 – · San Francisco · `BIG TECH`
  Real-Time Intelligence (2026 –) · Fabric Graph (2025–26) · SQL Database (2023–25)
- **Commure** — Senior Software Engineer · 2021 – 22 · `SERIES C` — FHIR interoperability, healthcare data ingestion · Golang, gRPC, Azure, MySQL
- **Duetto** — Senior Software Engineer · 2020 – 21 · `SERIES D` — revenue management, autopilot pricing APIs · Java, AWS, MongoDB
- **Suki AI** — Software Engineer · 2017 – 20 · `SEED · 5TH ENGINEERING HIRE` — AI voice assistant for clinicians: NLP feedback loops, feature flags, personalization · Python, Golang, GCP, k8s, BigQuery
- **Earlier** (one meta line): Cornell — MPS CS ’17, incl. Google academic-industry ML project · IISc NLP research · Glydel Tech, 4th hire · Comviva · B.E. Computer Science
(Exact months live in the HTML/`title` attrs and JSON-LD for recruiters who check; the visible ledger stays clean.)

### 4. On stage — label: ON STAGE
- Line: "9 years of conference talks." Two grayscale stills, click to play (color returns on play): [GopherCon 2018 — From REST to gRPC](https://www.youtube.com/watch?v=Z-AEqL2buyw) · [GopherCon 2019 — Feature Flags](https://www.youtube.com/watch?v=1BXPyweHFqA)
- Meta line: [all 9 talks](https://www.youtube.com/playlist?list=PLlO89qa61CulEYIUzSCS-kASw5YxTIY8p) · [Sessionize](https://sessionize.com/anagha-todalbagi/) · also Visual Studio Live!, LeadForward Summit · session chair, Grace Hopper
- Fact lines:
  - Founded **TEDxBNMIT** (2012) — the club still hosts events today
  - Mentor — **Learn IT Girl**, **AnitaB.org**
  - **Jagriti Yatra** fellow — selected from 15,000+ applicants
  - [*Can Interactive Systems Be Designed for Conviviality?* — DIS 2018](https://dblp.org/pid/220/7722.html)

### 5. Beyond — label: BEYOND, then footer
- Runs [Books and Rec. SF](https://docs.google.com/document/u/0/d/1yj3Kz9NJnPoINYdppF1r_cduDsjNsOCaXp5cFKv_0UY/mobilebasic?pli=1) — a bi-monthly book club hosted with her sister at Salesforce Park, open to all.
- Tennis, reading, first-principles thinking. Has shipped with teams across Serbia, China, Argentina, Israel, Spain, and India.
- **Footer:** "Say hello." — anagha.todalbagi@gmail.com · [LinkedIn](https://www.linkedin.com/in/anaghatodalbagi) ↗

## Cross-cutting
- External links `target="_blank" rel="noopener"`.
- JSON-LD Person (full dates live here); OG title "Anagha Todalbagi — Product leader who still ships"; OG image: static hero frame (name over mist).
- Lighthouse ≥ 95; iframes on click only; canvas paused off-screen; site weight target < 100 KB before video stills.

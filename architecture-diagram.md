# Architecture Diagram

This diagram represents the high-level architecture of the Sumita Makeover React + Vite app.

```mermaid
graph TD
  A[Browser / User] --> B[(index.html)]
  B --> C[main.tsx]
  C --> D[App.tsx]
  D --> E1[Layout Component]
  D --> E2[Router / Page Components]
  E2 --> F1[Home]
  E2 --> F2[About]
  E2 --> F3[Services]
  E2 --> F4[Gallery]
  E2 --> F5[Contact]
  E2 --> F6[Privacy]
  E2 --> F7[Disclaimer]
  D --> G[UI Library Components (src/components/ui/*)]
  D --> H[Hooks (use-mobile, use-toast)]
  D --> I[Lib utils]

  subgraph Public
    J[public/images/*]
  end
  A --> J

  style A fill:#f9f,stroke:#333,stroke-width:2px
  style B fill:#bbf,stroke:#333
  style C fill:#bfb,stroke:#333
  style D fill:#fde,stroke:#333
  style G fill:#eee,stroke:#333
  style H fill:#eee,stroke:#333
  style I fill:#eee,stroke:#333
  style J fill:#ffd,stroke:#333
```

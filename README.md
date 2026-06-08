# Landesfamilienpass BW Navigator

## Overview

**Landesfamilienpass BW Navigator** is a private, non-commercial CivicTech prototype that helps families in Baden-Wuerttemberg use the **Landesfamilienpass** in a more practical and understandable way.

The application does not process applications, verify eligibility, or replace any official decision by a city, municipality, or public authority. It is an orientation and planning tool: families can browse destinations, understand coupon conditions, mark visited places, track flexible museum coupons, and plan trips based on weather, distance, and family suitability.

The core product question is:

> How can a paper-based public benefit become easier to understand and use for real families without collecting personal data?

## Kurzbeschreibung fuer Verwaltung / Rathaus

Der **Landesfamilienpass BW Navigator** ist ein privater, nicht-kommerzieller Prototyp zur besseren Orientierung von Familien bei der Nutzung des Landesfamilienpasses Baden-Wuerttemberg.

Er zeigt moegliche Ausflugsziele, Couponarten, lokale Markierungen und einfache Planungshilfen. Die Anwendung ist kein offizielles Angebot einer Stadt oder Gemeinde, ersetzt keine Beratung und trifft keine rechtsverbindliche Entscheidung. Persoenliche Eingaben wie Notizen, besuchte Orte oder verwendete Coupons werden nur lokal im Browser gespeichert.

Der Prototyp kann als Diskussionsgrundlage fuer nutzerfreundlichere kommunale Informationsangebote, Familienunterstuetzung oder digitale Verwaltungsservices dienen.

## Product Concept

Many public-benefit programs are administratively clear but difficult for users to apply in everyday life. Information is often split across PDF lists, provider websites, official pages, paper coupons, and local instructions. This prototype converts that fragmented information into a simple user journey.

The product focuses on four practical questions:

1. Where can we go with the Landesfamilienpass?
2. Which destinations are free, discounted, or connected to a specific coupon?
3. Which coupons or visits have we already used?
4. Which destinations are realistic for our family, our location, the weather, and the age of our children?

## Key Features

- Multilingual interface: Russian, German, and English UI support.
- Destination catalog: museums, castles, monasteries, cultural sites, and family-friendly destinations in Baden-Wuerttemberg.
- Smart filters: place type, coupon condition, usage status, bad-weather suitability, and suitability for teenagers.
- Coupon tracking: local tracking of flexible museum coupons.
- Visited-place tracking: mark destinations as used or unused.
- Private notes: add notes per destination.
- Trip ideas: grouped suggestions for easier day-trip and weekend planning.
- Google Maps integration: direct navigation/search links for each destination.
- Privacy-first design: no account, no backend, no external user database.
- PWA-ready structure: manifest and app icon references for installable-app behavior.

## Tech Stack

- Frontend: React, TypeScript, Vite
- Styling: Tailwind CSS utility classes
- Icons: Lucide React
- State management: custom React hook with local persistence
- Persistence: browser localStorage
- Build tooling: Vite, TypeScript, ESBuild
- Deployment model: static frontend suitable for GitHub Pages, Vercel, Netlify, or municipal web hosting

## Technical Architecture

The application is intentionally lightweight. It does not require authentication, a backend database, server-side sessions, or external personal-data storage.

### Application State

User-specific state is handled through a custom store hook:

```ts
const INITIAL_STATE: UserState = {
  usedPlaces: [],
  notes: {},
  couponsUsed: [],
  language: 'ru',
};
```

The state is persisted locally:

```ts
localStorage.setItem('lfp-state', JSON.stringify(state));
```

This means that marked visits, coupon usage, notes, and language preference remain available on the same device/browser, but are not transmitted to any external server.

### Main UI Flow

The application is organized around three main tabs:

- Catalog: searchable and filterable destination list.
- Free Coupons: local tracking of flexible museum coupons.
- Trip Ideas: grouped suggestions for easier family planning.

Filtering and sorting are applied client-side through memoized React state transformations. The current data model keeps the prototype transparent and easy to review.

## Data Model

The destination catalog is based on a typed `Place[]` structure. Each destination can include:

- unique ID
- name and city
- destination type
- short description
- coupon type and coupon information
- estimated distance and travel time
- indoor / outdoor / mixed-weather suitability
- suitability for teenagers
- local photo reference
- website link
- Google Maps link

This structure makes the application easy to extend: new places can be added to the data file without changing the main UI logic.

## Privacy and Data Protection

This prototype follows a privacy-by-design approach:

- No login is required.
- No personal data is transmitted to a city, municipality, or external database.
- Notes, marked visits, and coupon history are stored only in the browser of the user's device.
- The project does not implement analytics, tracking, or server-side profiling.
- Clearing the browser storage also clears the locally saved app data.

## Administrative Disclaimer

This application is a private, non-commercial prototype and an orientation aid for families.

It is not an official service of the State of Baden-Wuerttemberg, a city, a municipality, or any public authority. It does not replace official advice, legal assessment, or the formal application process.

The application for the Landesfamilienpass, the verification of eligibility, and the decision on issuance remain exclusively within the responsibility of the competent city or municipal administration.

Information on opening hours, admission conditions, coupon rules, and participating institutions should always be checked directly with the respective provider or the official public authority before a visit.

Source status: June 2026. Information provided without warranty.

## Professional Relevance

This repository demonstrates the ability to:

- translate a real administrative and family-support problem into a digital product concept;
- design a privacy-friendly workflow without unnecessary data collection;
- structure multilingual UI logic for a heterogeneous user group;
- model domain data in a typed, maintainable format;
- build a deployable React/TypeScript prototype suitable for stakeholder review;
- communicate limitations, administrative boundaries, and improvement paths clearly.

The project is relevant for roles in AI automation, public-sector digitalization, UX prototyping, process optimization, civic technology, and user-centered service design.

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Nalotova/FamilienPassBW.git
cd FamilienPassBW
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Type Check

```bash
npm run lint
```

## Possible Next Improvements

- Add a German-first onboarding screen for municipal presentation.
- Add official source links per destination.
- Add a print/export view for families and municipal consultation desks.
- Add accessibility review according to WCAG basics.
- Add a dedicated "For municipalities" information page.
- Replace static distance values with optional user-location-based routing.
- Add a versioned data-source file for easier administrative review.
- Add source references and update dates per destination.
- Add a data-maintenance workflow for annual Landesfamilienpass updates.

## Author

Created by **Tetiana Nalotova** as a CivicTech and public-service UX prototype focused on family support, digital orientation, and practical use of public benefits.

Professional focus: AI automation, process optimization, user-centered digital tools, and workflow design for small organizations and public-facing services.

## License

Private prototype / portfolio project. Reuse, publication, or official deployment requires explicit permission from the author.

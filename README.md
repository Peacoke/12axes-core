# twelve-axes-core

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-12axes.site-green)](https://12axes.site/)

Pure, zero-dependency TypeScript/JavaScript calculation engine and 12-axis political coordinate system for [The 12 Axes (12axes.site)](https://12axes.site/).

## Official Links
- **Live Online Quiz**: [https://12axes.site/](https://12axes.site/)
- **Scoring & Normalization Methodology**: [https://12axes.site/method](https://12axes.site/method)
- **Versión en Español**: [https://12axes.site/es/](https://12axes.site/es/)
- **Versão em Português**: [https://12axes.site/pt/](https://12axes.site/pt/)

## Overview
Traditional 1D (Left vs Right) and 2D (Political Compass) political spectrums compress independent philosophical viewpoints onto single axes. 
The 12 Axes framework establishes 12 orthogonal dimensions:

### 1. Government (State & Power)
- **Federal vs Unitary**: Decentralized regional self-governance vs central unitary authority.
- **Democratic vs Autocratic**: Pluralistic voter accountability vs concentrated executive authority.
- **Security vs Freedom**: Social stability and law enforcement vs civil liberties and individual autonomy.

### 2. Foreign Affairs
- **Internationalist vs Nationalist**: Multilateral global treaties vs national sovereignty first.
- **Militarist vs Pacifist**: Preparedness for military deterrence vs diplomatic non-violence.
- **Protectionist vs Globalist**: Domestic economic tariffs vs open borderless trade.

### 3. Economy
- **Equality vs Markets**: Equitable resource redistribution vs unregulated market dynamics.
- **Planned vs Laissez-faire**: State industrial planning vs free enterprise.

### 4. Society & Culture
- **Secular vs Religious**: Separation of church and state vs faith-informed public ethics.
- **Progressive vs Traditional**: Cultural evolution vs preservation of historical customs.
- **Assimilationist vs Multiculturalist**: Civic cultural cohesion vs multicultural pluralism.
- **Technology vs Bioconservative**: Technological accelerationism vs bioethical caution.

## Installation

```bash
npm install twelve-axes-core
```

## Quick Start

```typescript
import { calculateScores, matchNearestIdeology, AXES } from 'twelve-axes-core';

// Vector of answers across questions (-2 to +2 scale)
const answers = [2, 1, 0, -1, 2, ...];
const scores = calculateScores(answers);
const ideology = matchNearestIdeology(scores);

console.log('Nearest Ideology:', ideology.name);
```

## License
MIT © Axes Explorer ([https://12axes.site/](https://12axes.site/))

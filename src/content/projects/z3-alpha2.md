---
title: Z3-alpha2
summary: Research on Monte Carlo Tree Search with LLM priors for Z3, competing as Z3-alpha2 at SMT-COMP 2026.
categories: [formal-methods, machine-learning]
role: SMT Solver Research Assistant
organization: ML for Logic @ Georgia Tech
startDate: 2025-11
status: active
technologies: [Z3, MCTS, Python]
featured: true
research: true
order: 3
links:
  - label: SMT-COMP 2026
    href: https://smt-comp.github.io/2026/
  - label: Single Query results
    href: https://smt-comp.github.io/2026/results/results-single-query/
  - label: System description (PDF)
    href: https://avik-kumar.github.io/z3-alpha2-system-description.pdf
draft: false
---

## Overview

With ML for Logic at Georgia Tech I work on learning-guided strategy search for SMT solving. Our competition solver, **Z3-alpha2**, combines Monte Carlo Tree Search (moving from UCT toward PUCT with LLM priors) and evolutionary feedback loops on top of Z3.

Team: John Lu, Avik Kumar, Piyush Jha, Arie Gurfinkel, and Vijay Ganesh.

## SMT-COMP 2026

Z3-alpha2 participated in SMT-COMP 2026. We received awards in 4 of our participating divisions. This year, derived solvers were eligible for awards only if they achieved at least a 10% improvement in PAR-2 over their base solver. Official rankings for the Single Query track are published by the competition.

A system description is available as a PDF on this site. A longer paper is in preparation.

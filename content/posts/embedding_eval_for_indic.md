---
title: "Bharat-NanoBEIR: Indian Language Information Retrieval Dataset"
date: 2025-03-13
description: "NanoBEIR in 22 Indian languages: 286 small retrieval benchmarks for checking how well an embedding model searches in Hindi, Tamil, Maithili and the rest."
tags: ["dataset", "information retrieval", "indian languages", "nlp"]
---

Most retrieval benchmarks are English. If you want to know whether an embedding model can actually search in Tamil or Bhojpuri, there is very little to test it on. Bharat-NanoBEIR is a small attempt at fixing that: the NanoBEIR benchmarks, in 22 Indian languages.

**Collection:** [Bharat-NanoBEIR on Hugging Face](https://huggingface.co/collections/carlfeynman/bharat-nanobeir-679054f72565fc5140ceb12f)

## Why Nano

[BEIR](https://github.com/beir-cellar/beir) is the standard zero-shot retrieval benchmark, but its full corpora run to millions of documents. Embedding all of them for every model and every language is slow and expensive. NanoBEIR keeps the same 13 tasks and shrinks each one to 50 queries and at most 10K documents. The scores track the full benchmark closely enough to compare models, and a full run takes minutes instead of hours.

Small is what makes 22 languages practical. 13 tasks × 22 languages is 286 datasets; at full BEIR size that would never get run.

## What's in it

**Tasks (13):** ArguAna, ClimateFEVER, DBPedia, FEVER, FiQA2018, HotpotQA, MSMARCO, NFCorpus, NQ, QuoraRetrieval, SCIDOCS, SciFact, Touche2020.

**Languages (22):** Assamese, Awadhi, Bengali, Bhojpuri, Chhattisgarhi, Gujarati, Hindi, Kannada, Kashmiri (Arabic and Devanagari scripts), Magahi, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Tamil, Telugu, Urdu.

The list goes past the usual big Indic languages on purpose. Awadhi, Magahi, Chhattisgarhi and Bhojpuri have tens of millions of speakers and almost no evaluation data.

Each dataset is named `carlfeynman/Bharat_Nano{Task}_{lang}`, for example `Bharat_NanoSciFact_ta`, and has three subsets in BEIR format:

- `corpus`: documents (`_id`, `text`)
- `queries`: 50 queries (`_id`, `text`)
- `qrels`: relevance judgments (`query-id`, `corpus-id`)

Queries and documents are both translated, so it measures monolingual retrieval within each language. The original NanoBEIR relevance judgments carry over unchanged. Licence is CC-BY-4.0.

## Using it

The format plugs straight into the Sentence Transformers retrieval evaluator:

```python
from datasets import load_dataset
from sentence_transformers import SentenceTransformer
from sentence_transformers.evaluation import InformationRetrievalEvaluator

name = "carlfeynman/Bharat_NanoSciFact_ta"
corpus = load_dataset(name, "corpus", split="train")
queries = load_dataset(name, "queries", split="train")
qrels = load_dataset(name, "qrels", split="train")

relevant = {}
for row in qrels:
    relevant.setdefault(row["query-id"], set()).add(row["corpus-id"])

evaluator = InformationRetrievalEvaluator(
    queries=dict(zip(queries["_id"], queries["text"])),
    corpus=dict(zip(corpus["_id"], corpus["text"])),
    relevant_docs=relevant,
    name="NanoSciFact_ta",
)

model = SentenceTransformer("BAAI/bge-m3")
print(evaluator(model))  # nDCG@10, MRR@10, recall@k, ...
```

Loop over tasks and languages and you get a per-language table, which is the interesting part: it shows where a model that looks fine in Hindi stops working.

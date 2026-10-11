---
title: {{ .Title | jsonify }}
date: {{ .Date.Format "2006-01-02" }}
{{ with .Description }}description: {{ . | jsonify }}
{{ end }}{{ with .Params.tags }}tags: {{ . | jsonify }}
{{ end }}url: {{ .Permalink }}
author: {{ site.Title }}
---

# {{ .Title }}

{{ replaceRE `\]\(/` (printf "](%s" site.BaseURL) .RawContent | safeHTML }}

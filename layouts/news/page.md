---
title: {{ .Title | jsonify }}
date: {{ .Date.Format "2006-01-02" }}
updated: {{ .Lastmod.UTC.Format "2006-01-02T15:04:05Z" }}
url: {{ .Permalink }}
author: {{ site.Title }}
---

# {{ .Title }}
{{ with .Description }}
{{ . }}
{{ end }}
{{ range partial "news/items.html" . }}
- {{ if .spike }}**Spike.** {{ end }}[{{ .title }}]({{ .url }}) ({{ .source }}, {{ .kind }}{{ with .topic }}, {{ . }}{{ end }}{{ with .time }}, {{ . }} UTC{{ end }}): {{ .summary }}{{ end }}

{{- $t := index (partialCached "themes/current.html" .CurrentSection) (sub .Params.rank 1) -}}
---
title: {{ .Title | jsonify }}
rank: {{ $t.rank }}
status: {{ $t.status }}
first_seen: {{ dateFormat "2006-01-02" $t.first_seen }}
last_updated: {{ dateFormat "2006-01-02" $t.last_updated }}
url: {{ .Permalink }}
author: {{ site.Title }}
---

# {{ .Title }}

{{ $t.summary }}

## Evidence
{{ range $t.evidence }}
- [{{ .title }}]({{ .url }}) ({{ .source }}, {{ .kind }}, {{ .day.Date.Format "2006-01-02" }}): {{ .summary }}{{ end }}

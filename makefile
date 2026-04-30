PORT ?= 8000
HOST ?= 127.0.0.1

serve:
	python3 -m http.server $(PORT) --bind $(HOST)
	zen-browser "http://$(HOST):$(PORT)"

.PHONY: serve

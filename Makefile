PATH := node_modules/.bin:${PATH}
SRC = ./src
DIST = ./dist
PY = python3

# ifneq (,$(wildcard ./.env))
#     include .env
#     export
# endif

ifneq (,$(wildcard ./.env.dev))
    include .env.dev
    export
endif

# cert:


dev:
		webpack serve --config webpack.dev.js

clean:
		rm -rf $(DIST)/*

build-dev:
		webpack --config webpack.dev.js

build-prod:
		webpack --config webpack.prod.js

pyserve:
		$(PY) -m http.server --directory $(DIST)

.PHONY: all dev clean 
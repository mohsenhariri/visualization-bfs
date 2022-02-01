PATH := node_modules/.bin:${PATH}

# ifneq (,$(wildcard ./.env))
#     include .env
#     export
# endif

ifneq (,$(wildcard ./.env.dev))
    include .env.dev
    export
endif

dev:
		npm run serve

build:
		npm run build

.PHONY: all dev clean 
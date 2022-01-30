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


.PHONY: all dev clean 
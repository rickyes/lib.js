ITEMS = $(shell find test -type f -name "*.test.js")
TAP   = ./node_modules/.bin/tap

install:
	@npm i --registry=https://registry.npm.taobao.org

unit:
	@$(TAP) -j4 $(ITEMS)

cov:
	@$(TAP) -j4 ${ITEMS} --cov

.PHONY: install

image_name := commodityalerts
docker_repo := docker.armtdev.com

version := $(shell node -p -e "require('./package.json').version")
commitsha := $(shell git log -1 --format=%h)
branch := $(shell echo `git symbolic-ref --short -q HEAD` | sed "s/^\$$/${CI_BUILD_REF_NAME}/")

export build_suffix

ifdef variant
build_suffix=-$(variant)
Dockerfile$(build_suffix):
	sed -r "s@\<grunt build\>@grunt build$(build_suffix)@" Dockerfile > Dockerfile$(build_suffix)
endif

build: Dockerfile$(build_suffix)
	docker build --no-cache --tag=$(image_name):latest$(build_suffix) --build-arg=version=$(version) --build-arg=commitsha=$(commitsha) --build-arg=branch=$(branch) -f Dockerfile$(build_suffix) .

build-if-needed: Dockerfile$(build_suffix)
	docker build --tag=$(image_name):latest$(build_suffix) --build-arg=version=$(version) --build-arg=commitsha=$(commitsha) --build-arg=branch=$(branch) -f Dockerfile$(build_suffix) .

Xpublish: build-if-needed
	[ -n "$(tag)" ]
	docker tag -f $(image_name):latest$(build_suffix) $(docker_repo)/$(image_name):$(tag)
	docker push $(docker_repo)/$(image_name):$(tag)

Xpublish-latest: build-if-needed
	$(MAKE) publish tag=latest$(build_suffix) force=1

clean:
	docker rmi $(image_name):latest$(build_suffix)


.PHONY: build build-if-needed publish publish-latest clean

SHELL=/bin/bash

ifeq ($(shell echo ${GOLLYX_PELICAN_THEME_HOME}),)
$(error Environment variable GOLLYX_PELICAN_THEME_HOME not defined. Please run "source environment" in the repo root directory before running make commands)
endif


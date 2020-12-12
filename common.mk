SHELL=/bin/bash

ifeq ($(shell echo ${GOLLY_PELICAN_THEME_HOME}),)
$(error Environment variable GOLLY_PELICAN_THEME_HOME not defined. Please run "source environment" in the golly-pelican-theme repo root directory before running make commands)
endif


#!/bin/bash
metalsmith --version
./node_modules/metalsmith/bin/metalsmith
gulp compress
gulp imgcopy
gulp jsoncopy

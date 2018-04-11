#!/bin/bash

if [[ -v CREDENTIALS_FILE ]]; then
	echo $CREDENTIALS_FILE > config/credentials.js
else
	echo '/* CI */ module.exports = {};' > config/credentials.js
fi

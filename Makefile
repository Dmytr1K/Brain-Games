install:
	npm install

lint:
	npm run eslint .

calc:
	npm run babel-node -- src/bin/brain-calc.js

even:
	npm run babel-node -- src/bin/brain-even.js

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

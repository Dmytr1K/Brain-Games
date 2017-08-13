install:
	npm install

lint:
	npm run eslint .

start:
	npm run babel-node -- src/bin/brain-games.js

balance:
	npm run babel-node -- src/bin/brain-balance.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

even:
	npm run babel-node -- src/bin/brain-even.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

progression:
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish

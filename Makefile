.PHONY:





website_dependencies:
	cd frontend/the-world && npm install

website_dev: website_dependencies
	cd frontend/the-world && npm run dev

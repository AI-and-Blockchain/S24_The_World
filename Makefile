.PHONY: dependencies


ipfs_dependencies:
    ipfs init
    ipfs daemon

website_dependencies:
	cd frontend/chan_frontend && npm install

website_dev: website_dependencies
	cd frontend/chan_frontend && npm run dev

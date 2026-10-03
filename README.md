# Sivakar Diwali 2026 — Database Edition

## Folder structure
- `index.html` — customer catalogue/order page
- `admin.html` — shop-owner inventory/price editor
- `supabase-config.js` — paste your Supabase URL + anon key here
- `supabase/schema.sql` — database tables + atomic stock functions
- `supabase/seed_products.csv` — all 225 products for import
- `assets/images/product-001.jpg` — test image only; replace with the real product image
- `assets/media/product-001.mp4` — test video only; replace with the real preview

## Data model
Each product stores `stock_units` and `units_per_box`.
- Boxes available = floor(stock_units / units_per_box)
- Remaining pieces = stock_units % units_per_box
- Piece price = box price / units per box
- Buying a box consumes `units_per_box` internal units.
- Buying one piece consumes 1 internal unit.

## Setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. In Table Editor → `products` → Import data from CSV, upload `supabase/seed_products.csv` and map the columns with the same names. The supplied seed starts every product at 100 boxes × 10 units = 1,000 internal units. You can change these in Admin.
4. Copy Project URL and anon/public key into `supabase-config.js`. Never put a Supabase service-role key in these HTML files.
5. Upload `index.html`, `admin.html`, `supabase-config.js`, `assets/`, and `supabase/` to your hosting/repository.
6. Open the customer page and admin page. Both read the same database.

## Media naming
Image: `assets/images/product-001.jpg` through `product-225.jpg`
Video: `assets/media/product-001.mp4` through `product-225.mp4`
The customer page only shows a video when that file exists. Replace the supplied product-001 test files before launch.

## Important
The supplied schema is suitable for an MVP test. The admin RPCs are intentionally simple. Before public launch, add Supabase Auth and restrict admin functions so customers cannot call stock/price update functions.

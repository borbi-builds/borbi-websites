#!/bin/bash

# Generate the 5 remaining sites by copying the template and modifying content

SITES=(
  "marketing-arm:Marketing Arm:AI-powered marketing for local businesses"
  "websites-services:Website Services:Custom websites built fast"
  "automation-sales:Automation Sales:Workflow automation that works"
  "trained-agents:Trained Agents:AI agents that scale your team"
  "equity-research:Equity Research:Research that informs decisions"
)

BASE_APP="apps/borbi-enterprises"

for site_config in "${SITES[@]}"; do
  IFS=':' read -r app_name display_name tagline <<< "$site_config"
  
  app_dir="apps/$app_name"
  
  echo "Creating $app_name..."
  
  # Copy the base app
  cp -r "$BASE_APP" "$app_dir"
  
  # Update package.json
  sed -i '' "s/\"name\": \"borbi-enterprises\"/\"name\": \"$app_name\"/" "$app_dir/package.json"
  
  echo "✓ Created $app_name"
done

echo ""
echo "All sites generated! Next steps:"
echo "1. npm install (from root)"
echo "2. npm run dev (to start all sites)"
echo ""
echo "Each site is at:"
echo "  - borbi-enterprises: http://localhost:3000"
echo "  - marketing-arm: http://localhost:3001"
echo "  - websites-services: http://localhost:3002"
echo "  - automation-sales: http://localhost:3003"
echo "  - trained-agents: http://localhost:3004"
echo "  - equity-research: http://localhost:3005"

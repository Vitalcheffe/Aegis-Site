#!/bin/bash
# Download real military/defense photos from Unsplash
urls=(
  "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1920&q=80" # military helicopter
  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=80" # fighter jet
  "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=80" # military night
  "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1920&q=80" # navy ship
  "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=80" # military operations
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1920&q=80" # military aircraft
  "https://images.unsplash.com/photo-1530124566582-a45a7e3e29f0?w=1920&q=80" # military tech
  "https://images.unsplash.com/photo-1603509902991-e7e7e1930a9e?w=1920&q=80" # defense tech
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80" # abstract tech
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" # earth from space
  "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80" # night ops
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80" # soldier silhouette
  "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1920&q=80" # military parade
  "https://images.unsplash.com/photo-1598947029153-8e2e766c3e73?w=1920&q=80" # airport security
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80" # data center
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" # network ops
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80" # business tech
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80" # matrix code
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80" # data visualization
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" # cybersecurity
  "https://images.unsplash.com/photo-1527684651643-3df0b46f43e0?w=1920&q=80" # military coordination
  "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1920&q=80" # team meeting
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80" # tech workspace
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80" # gradient abstract
  "https://images.unsplash.com/photo-1620712943543-bcc4688da725?w=1920&q=80" # radar screen
  "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&q=80" # satellite
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920&q=80" # aerial photography
  "https://images.unsplash.com/photo-1532629345422-751700f69382?w=1920&q=80" # military base
  "https://images.unsplash.com/photo-1605100704765-2394e0d456db?w=1920&q=80" # drone aerial
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1920&q=80" # city skyline night
)

names=(
  "military-helicopter.jpg"
  "fighter-jet.jpg"
  "military-night.jpg"
  "navy-ship.jpg"
  "military-operations.jpg"
  "military-aircraft.jpg"
  "military-tech.jpg"
  "defense-tech.jpg"
  "abstract-tech.jpg"
  "earth-space.jpg"
  "night-ops.jpg"
  "soldier-silhouette.jpg"
  "military-parade.jpg"
  "airport-security.jpg"
  "data-center.jpg"
  "network-ops.jpg"
  "business-tech.jpg"
  "matrix-code.jpg"
  "data-visualization.jpg"
  "cybersecurity.jpg"
  "military-coordination.jpg"
  "team-meeting.jpg"
  "tech-workspace.jpg"
  "gradient-abstract.jpg"
  "radar-screen.jpg"
  "satellite-orbit.jpg"
  "aerial-photography.jpg"
  "military-base.jpg"
  "drone-aerial.jpg"
  "city-skyline-night.jpg"
)

for i in "${!urls[@]}"; do
  echo "Downloading ${names[$i]}..."
  curl -sL "${urls[$i]}" -o "${names[$i]}" &
done
wait
echo "All downloads complete"
ls -la *.jpg | wc -l

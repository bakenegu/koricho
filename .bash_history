- Fix logo display issue
- Update routing and navigation"
git remote add origin https://github.com/bakenegu/Temari-lije.git
git push -u origin master
sudo su
sudo lpadmin -x L3060
sudo apt update
sudo apt install printer-driver-escpr
sudo apt-get update
sudo apt-get upgrade windsurf
lsof -i :3000
npm run dev
ssh frappe@test.globedocket.com~
ssh frappe@test.globedocket.com
lsof -i :3000
npm run dev
git add .
git commit -m "apo fix"
git push
cd /home/biruk/CascadeProjects
npx create-next-app@latest scholar-knowledge-base --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd /home/biruk/CascadeProjects/scholar-knowledge-base
npm run dev
npm list tailwindcss postcss autoprefixer
rm src/app/page.tsx && touch src/app/page.tsx
windsurf /home/biruk/CascadeProjects/scholar-knowledge-base/
npm run dev
echo 'export { default } from "./auth/page";' > src/app/page.tsx
pkill -f "next dev" && npm run dev
npm install react-icons
grep -n "<div" /home/biruk/CascadeProjects/scholar-knowledge-base/src/app/auth/page.tsx | wc -l
cd /home/biruk/CascadeProjects/sherlock
grep -n "<div" /home/biruk/CascadeProjects/scholar-knowledge-base/src/app/auth/page.tsx
npm run dev
npm uninstall tailwindcss postcss autoprefixer && npm install -D tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/postcss
pkill -f "next dev" && npm run dev
npm install react-icons
pkill -f "next dev" && npm run dev
pkill -f "next dev"
windsurf /home/biruk/gda-website
ls
cd gda-website
windsurf .
lsof -i :3000
git init -b main
git add .
git commit -m "first to push to github"
git remote add origin https://github.com/bakenegu/GD-Scholar-Knowledge-Base.git
git push origin main
git status -uno
ls -la
git rev-parse --show-toplevel
bash -lc 'if [ -d .git ]; then echo has_git; else echo no_git; fi'
head -n 200 /home/biruk/Downloads/Scholar\ Knowledge\ Base/components/catalog-page.tsx
file /home/biruk/Downloads/Scholar\ Knowledge\ Base/components/catalog-page.tsx
lsof -i :3000
npm run dev
pkill -f "next dev" || true
lsof -i :3000 -t
npm run dev
npm install
npm install --legacy-peer-deps
npm run dev
git push origin main
lsof -i :3000
kill -15 $(lsof -ti :3000)
lsof -i :3000
pm2 ls
pm2 lslsof -nP -iTCP:3000 -sTCP:LISTEN
fuser -k 3000/tcp
which pnpm || which npm || which yarn
npm run dev
lsof -i :3000
npm run dev
npm start
npm start
pkill -f "react-scripts start"
cd ~/Downloads
sudo dpkg -i cursor_1.5.5_arm64.deb
sudo apt-get -f install
cursor_1.5.5_amd64.deb
sudo dpkg -i cursor_1.5.5_amd64.deb
sudo apt-get install -f
uname -m                     # should print x86_64
ls -lh ~/Downloads/*.deb     # see what .deb files you actually have
rm ~/Downloads/cursor_1.5.5_arm64.deb
cd ~/Downloads
sudo apt install ./cursor_1.5.5_amd64.deb
pkill -f "next-server"
rm -rf .next
npm run dev
npm run dev
ssh frappe@test.globedocket.com
git log -p components/GradeGridSection.tsx
git status
git fetch origin
git merge origin/main
git checkout bakenegu
git checkout -b bakenegu origin/main
git branch -a
git status
git branch
git branch --show-current
git remote -v
git fetch origin
ls -la
ls -la .git
git rev-parse --is-inside-work-tree
git checkout -b bakenegu 2>/dev/null || git checkout bakenegu
git pull origin main:bakenegu
find /home/biruk/gda-website -name .git -type d
git branch -v
cat .git/HEAD
git checkout -b bakenegu || git checkout bakenegu
git checkout bakenegu
ls -la
echo "Testing command output"
git branch -a 2>&1
lsof -i :3000
npm run dev
lsof -i :3000
PORT=3001 npm run dev
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs -r kill -9
npm run dev
git add .
git status
git add .
git commit -m "Initial commit regarding blog"
git push origin bakenegu
git add .
git commit -m "Initial commit regarding blog"
git status
git checkout main
git status
git pull 
git status
git pull origin main
git pull main
git checkout bake-negu
git pull origin main
git checkout bake-negu
git merge main
git push origin bakenegu
git fetch origin
git merge origin/main
git pull origin main
git checkout main
git status
# Make sure you're on your branch
git checkout your-branch
# Fetch latest changes from remote
git fetch origin
# Reset your branch to match remote main exactly
git reset --hard origin/main
ps aux | grep -i 'next dev' | grep -v grep
npm run dev
lsof -i :3000
npm run dev
git fetch origin
git checkout bakenegu
git merge origin/preview    # --no-ff is default in many setups, optional
git push origin bakenegu
git status
git add .
git commit -m "blog half % completion"
git push 
git push origin bakenegu
git pull
git push origin bakenegu
git push --force-with-lease origin bakenegu
# 1) Get the latest from GitHub
git fetch origin
# 2) Switch to your branch
git checkout bakenegu
# 3) Sync your local branch with GitHub’s copy (fixes the non-fast-forward error)
git pull --rebase origin bakenegu
# 4) Bring preview’s updates into your branch (no history rewrite)
git merge origin/preview
# 5) Push your up-to-date branch
git push origin bakenegu
# 1) If a merge/rebase is in progress, abort it (harmless if none)
git merge --abort 2>/dev/null || true
git rebase --abort 2>/dev/null || true
# 2) Get the latest refs from GitHub
git fetch origin
# 3) Switch to your branch
git checkout bakenegu
# 4) Make your local branch identical to the remote branch
git reset --hard origin/bakenegu
# 0) Update local refs
git fetch origin
# 1) Make sure preview is up to date
git checkout preview
git pull origin preview
# 2) Merge bakenegu but prefer preview on conflicts
#    (-X ours = keep CURRENT branch's hunks, i.e., preview's)
git merge -X ours origin/bakenegu
# If it still stops with conflicts (e.g., rename/rename), accept preview file-by-file:
# for f in $(git diff --name-only --diff-filter=U); do git checkout --ours -- "$f"; done
# then:
# git add .
# git commit
# 3) Now bring in latest main to preview
git merge origin/main        # normal merge (resolve if any)
# If you ALSO want preview to win conflicts vs main:
# git merge -X ours origin/main
# 4) Push the updated preview
git push origin preview
git fetch origin
git checkout preview
git pull origin preview
git merge origin/jb
# 1) Get latest refs
git fetch origin
# 2) Switch to jb and sync it with GitHub
git checkout jb
git pull origin jb
# 3) Merge preview into jb (this brings preview's changes in)
git merge origin/preview
git checkout jb
git fetch origin
git reset --hard 71bfc86a08b1364f35718786c7fa937b461e4c4c
git checkout bakenegu
git fetch origin
git reset --hard 037dacefaf6a9cea99a583125c562ded27436a50
git fetch origin
git checkout preview
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git push --force-with-lease origin preview
git switch preview
git checkout preview
git fetch origin
git checkout bakenegu
git reset --hard origin/main
git checkout preview
git checkout bakenegu
git fetch origin
git reset --hard 037dacefaf6a9cea99a583125c562ded27436a50
git fetch origin
git checkout preview
git pull origin preview
# Bring the blog components from bakenegu
git checkout origin/bakenegu -- app/components/blog/*
# Stage, commit, and push
git add app/components/blog/*
git commit -m "Bring blog components from bakenegu into preview"
git push origin preview
git status
git checkout bakenegu
git restore components/blog/BlogHeader.tsx
git checkout bakenegu
git fetch origin
git checkout preview
git pull origin preview
# Copy the entire components/blog folder from bakenegu
git checkout origin/bakenegu -- components/blog
# Stage and commit
git add components/blog
git commit -m "Bring blog folder from bakenegu into preview"
git push origin preview
git fetch origin
git checkout preview
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git push --force-with-lease origin preview
git checkout bakenegu
git add .
git status
git commit -m "fix header issue"
git push origin bakenegu
git fetch origin
git checkout preview
git pull origin preview
git merge origin/bakenegu     # start the merge
# If there are conflicts, Git will stop here.
git fetch origin
git checkout preview
git pull origin preview
git merge origin/bakenegu     # start the merge
# If there are conflicts, Git will stop here.
git fetch origin
git checkout preview
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git fetch origin
git checkout preview
git pull origin preview
# Merge bakenegu into preview, but prefer preview's changes if conflicts
git merge -X ours origin/bakenegu
# If Git still stops (rare cases like file renames), you can force preview’s version:
#   git checkout --ours path/to/file
#   git add path/to/file
git commit   # if Git didn't auto-commit
git push origin preview
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git fetch origin
git checkout preview
git pull origin preview
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git fetch origin
git checkout preview
git pull origin preview
git merge origin/bakenegu     # start the merge
# If there are conflicts, Git will stop here.
git reset --hard a9ad53de14549e1ca0739dfd200294672c297958
git checkout bakenegu
git status
git fetch origin
git checkout jb
git pull origin jb        # update jb first
git merge origin/bakenegu # bring in remote bakenegu’s changes
git branch
git fetch origin
git checkout jb
git reset --hard origin/preview
git push --force-with-lease origin jb
git checkout bakenegu
git checkout jb
git fetch origin
git checkout jb
git reset --hard 71bfc86a08b1364f35718786c7fa937b461e4c4c
git push --force-with-lease origin jb
git checkout bakenegu
lsof -i :3000-3999
npx next dev
npm run dev
yarn dev
npm run dev
npx next dev
git reset --hard HEAD~1
git merge --no-commit origin/preview
git status
git merge --abort
git reset --hard HEAD~1
git merge --no-ff origin/preview
git status
git diff --name-only --diff-filter=U
npm run dev
ps aux | grep next
npx next dev -p 3004
lsof -i :3000-3010
npx next dev -p 3005
lsof -i :3000-3010
npx next dev -p 3010
sudo apt-get update
sudo apt-get upgrade windsurf
git switch preview
git switch bakenegu
git fetch
git fetch preview
git merge preview
git add .
git commit -m "merge with jb"
git add .
git push origin bakenegu
yarn dev
npm run dev
npm run dev -- --debug
npx next dev -H 0.0.0.0
npx next dev -p 3009
lsof -i :3000
lsof -i -P -n | grep LISTEN
pkill -f "node.*next"
pkill -f "next dev"
rm app/blog/layout.tsx
yarn dev
npm run dev
sudo lsof -i :3000-3999
sudo lsof -ti :3000-3999 | xargs -r sudo kill -9
ls
cd CascadeProjects
ls
cd scholar-knowledge-base
windsurf .
git switch bakenegu
git add .
git commit -m "merged from jb"
git push
npm i
git merge bakenegu
git status
npm run dev
lsof -i :3000
npm run dev
yarn dev
bun --version
npm run dev -- -p 3009
curl -I http://localhost:3009
lsof -i :3009
kill $(lsof -t -i:3009) 2>/dev/null || true
npm run dev -- -p 3009
sleep 5 && (netstat -tuln 2>/dev/null | grep 3009 || echo "Port 3009 not in use")
npx next dev -p 3009
ls -la package.json*
ls -la
cd /
ls -la /home/biruk/gda-website/
git push
# 1. Fetch the latest remote changes
git fetch origin
# 2. Reset your local branch (e.g., main) to the remote branch
git reset --hard origin/main
\
# 1. Fetch the latest remote changes
git fetch origin
# 2. Reset your local branch (e.g., main) to the remote branch
git reset --hard origin/main
git merge bakenegu
git status
git add .
git commit -m "bakenegu merged"
git push
git pull
git push
npm i
lsof -i :3000
yarn dev
npm run dev
npx next dev
npx next dev -p 5000
rm -rf .next node_modules package-lock.json && npm install
cat package.json
bun install
cat > package.json << 'EOL'
{
  "name": "gda-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -H 0.0.0.0",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.23",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "14.2.23"
  }
}
EOL

npm install
npm run dev
lsof -i :3000 -i :3001 -i :3002 -i :3003 -i :3004 -i :3005
npx next dev
pkill -f "next dev"
lsof -i :3000
ps aux | grep next
npx next dev --debug
DEBUG=* npx next dev
lsof -i :3000
npx next dev
lsof -i :3000
npx next dev
npm install @mui/material @emotion/react @emotion/styled
npm install react-country-flag
pkill -f "next dev"
git checkout a655c4529f1407a263eb81a2447bf8b015896ee6
git branch bakenegu
git status
git branch -a
cd /home/biruk/Knoweledge base
/home/biruk/Knoweledge~base
cd /home/biruk/Knoweledge_base
git clone https://github.com/bakenegu/GD-Scholar-Knowledge-Base
cd knowledge_base
cd /home/biruk/Knowledge_base
windsurf .
cd /home/biruk/Knowledge_base/GD-Scholar-Knowledge-Base
windsurf .
lsof -i :3000
npm run dev
ssh frappe@test.globedocket.com 
ssh frappe@test.globedocket.com 
git add .
git commit -m "removal of email sending and thank you page because of hosting problem they cause"
git push
git checkout main
git reset --hard origin/preview
git push origin main --force
yarn build
npm run build
lsof -i :3000
yarn dev
npm run dev
ssh frappe@test.globedocket.com
dig +short knowledgebase.globedocket.com
nslookup knowledgebase.globedocket.com
git remote -v
git reset --hard origin/main
git push
git branch bakenegu
git checkout bakenegu
git checkout main
git push
git checkout bakenegu
git merge main
git push bakenegu
git push origin bakenegu
git push
lsof -i :3000
npm run dev
npm install
npm install --legacy-peer-deps
npm run dev
lsof -i :3000
npm run dev
ssh frappe@test.globedocket.com
git push
npm start
ssh frappe@test.globedocket.com
git push
npm run dev
npm start
lsof -i :3000
npm run dev
git pull origin main
git fetch origin
git origin pull
git pull origin main
git reset --hard origin/main
npx next dev
lsof -i :3000
lsof -i :3001
kill -9 12566
lsof -i :3001
git push
git push hard 
git push origin bakenegu --force
npm run dev
npm cache clean --force
rm -rf node_modules
npm install
npm run dev
npm install react-markdown
mv /home/biruk/gda-website/app/blog/[slug]/page.tsx.new /home/biruk/gda-website/app/blog/[slug]/page.tsx
npm run dev
npm run dev
ls -la /home/biruk/gda-website/lib
npm list react-markdown
npm install clsx
pkill -f "next dev"
npm install tailwind-merge
rm -rf .next
npm run dev
git status --porcelain
git push origin bakenegu
git status --porcelain
git checkout bakenegu
git fetch origin
git push origin bakenegu
git fetch origin
git switch bakenegu
git checkout origin/main -- components/HeroSection.tsx lib/api.ts
git status -sb
git commit -m "Bring in HeroSection and api.ts changes from origin/main"
git push -u origin bakenegu
git pull origin main
git reset --hard origin/main
npm run build
npm run start
git checkout bakenegu
git reset --hard 9805f5758dca36e3725787dd86c0227f5768109b
git reset --hard b0d13fa6cd8ccfeb0d1c85b3f4bd01b1d0e43a0b
git checkout origin/main -- components/HeroSection.tsx lib/api.ts
git status -sb
git commit -m "Bring in HeroSection and api.ts changes from origin/main"
git push origin  main
git push origin bakenegu
git checkout preview
[200~git checkout preview
git cherry-pick -n b89cc8fc6ae9b5709303fc4fde199e674e73a60a
git reset
git add -p components/GradeGridSection.tsx
git add -p lib/api.ts
git commit -m "Selectively applied hunks from b89cc8f into preview"
# Are the changes from b89cc8f already in preview?
git branch --contains b89cc8fc6ae9b5709303fc4fde199e674e73a60a
git show b89cc8fc6ae9b5709303fc4fde199e674e73a60a -- components/GradeGridSection.tsx
git checkout preview
git status --porcelain
# 2) Start a revert of that commit, but DON'T auto-commit
git revert -n b89cc8fc6ae9b5709303fc4fde199e674e73a60a
# 3) Unstage everything so we can choose hunks
git reset
# 4) Pick hunks to REVERT (undo)
#    y = revert this hunk, n = keep it, s = split into smaller hunks
git add -p components/GradeGridSection.tsx
# (also run for other files from that commit if needed)
# git add -p lib/api.ts
# 5) Review what will be reverted
git diff --staged
# 6) Commit the partial revert
git commit -m "Partially revert b89cc8f in GradeGridSection.tsx"
# make sure you're on preview and clean
git checkout preview
git status --porcelain    # should be empty
# start the revert without auto-committing
git revert -n b89cc8fc6ae9b5709303fc4fde199e674e73a60a
# unstage everything so you can pick hunks
git reset
# open the hunk picker for the file
git add -p components/GradeGridSection.tsx
# review what you selected to revert
git diff --staged
# commit the partial revert
git commit -m "Partially revert b89cc8f: adjust GradeGridSection redirect only"
# if push complains about divergence, rebase and push safely
git fetch origin
git rebase origin/preview   # resolve if prompted; then `git rebase --continue`
git push --force-with-lease
# (only if it shows as modified)
git checkout -- lib/api.ts   # discard the staged/working changes for that file
git switch bakenegu
git push origin bakenegu
git push --force-with-lease origin bakenegu
git push origin bakenegu
npx next start -p 3010
ss -lptn | grep -E ":3000\s" || true
npm run dev -- -p 3000
ss -lptn | awk 'NR>1{print $4}' | sed -n 's/.*:\([0-9][0-9]*\)$/\1/p' | sort -n | uniq | grep -E '^(300[0-9]|301[0-5])$' || true
npm run dev -- -p 3001
npm run build
npx next start -p 3011
ss -lptn | grep -E ":3000|:3001" || true
npm run dev -- -p 3000
ss -lptn | grep -E ":3000\s" || true
ss -lptn | awk 'NR>1{print $4"\t"$6}' | sed -n 's/.*:\([0-9][0-9]*\)\t.*pid=\([0-9][0-9]*\).*/\1 \2/p' | grep -E '^(3000|3001|3002|3010|3011|3012) ' || true
npm run dev -- -p 3000
ss -lptn | grep -E ":3000\s" || true
npm run dev -- -p 3002
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000
npm run start
ss -lptn | grep -E ":30(0|1|2)[0-9]" || true
npm run dev -- -p 3000
git fetch origin && git checkout main && git reset --hard origin/main
npm run build
npx next start -p 3012
ss -lptn | grep -E ":300(0|1|2|3)\s" || true
npm run dev -- -p 3000
npm run dev -- -p 3002
npm run dev -- -p 3013
ss -lptn
kill 12312 12604 13902 14979
ss -lptn | awk 'NR>1{print $4"\t"$6}' | sed -n 's/.*:\([0-9][0-9]*\)\t.*pid=\([0-9][0-9]*\).*/\1 \2/p' | awk '$1>=3000 && $1<=3020{print $1, $2}' || true
npx next dev -H 0.0.0.0 -p 3003
ssh frappe@test.globedocket.com
npm run dev
git push origin bakenegu
git checkout main
git pull origin bakenegu
git reset --hard origin/bakenegu
git fetch origin jb
git merge origin gb
git merge origin jb
git reset --hard origin/bakenegu
git push origin main
git reset --hard origin/main
git reset --hard origin/bakenegu
git push --force origin main
npm run dev
git pull 
git reset --hard origin/jb
git reset --hard jb
git push origin bakenegu
lsof -i :3000
yarn dev
npm run dev
ssh frappe@test.globedocket.com
git push
git switch bakenegu
git fetch bakenegu
git fetch main
git fetch 
git merge main
git push origin bakenegu
lsof -i :3000
npm run dev
sudo apt-get update
sudo apt-get upgrade windsurf
curl -s -I http://localhost:3000 || true
ss -ltn | grep :3000 || true
rm -rf .next
pkill -f "next dev" || true
npm run build
pkill -f "next dev" && sleep 2 && npm run dev
yarn dev
npm run dev
npm update next
ps aux | grep "next dev" | grep -v grep
npm run dev
lsof -i :3000 || true
DEBUG=* npx next dev
node -v && npm -v
rm -rf node_modules .next && npm install
npm run dev
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
cd /home/biruk/gda-website
DEBUG=* npx next dev
lsof -i :3000
npx next dev -p 3001
lsof -i :3000 -i :3001 -t | xargs -r kill -9
npm run dev
ss -ltn | grep :3000 || true
npm run build
node node_modules/.bin/next dev -H 0.0.0.0
npm run dev
lsof -i :3000
yarn dev
npm run dev
curl -s "https://app.gdacademy.et/api/v2/blogs/all" | jq '.result[] | select(.slug == "privacy-and-policy")'
node --version
node scripts/fetch-privacy-policy.js
ls
cd CascadeProjects
ls
git clone https://github.com/bakenegu/4loop.git
ssh frappe@test.globedocket.com
git push
git pushg
git status
git add .
git commit -m "end of small tasks"
git push
git merge bakenegu
git push
git status
npm run dev
ssh frappe@test.globedocket.com
npm run dev
lsof -i :3000
pkill -f 'next|node' || true
lsof -i :3000
yarn dev
npm run dev
npm restart
ssh frappe@test.globedocket.com
curl -sI http://localhost:3000/ | head -n 20
yarn dev
npm run dev
git push
git checkout bakenegu
git merge main
git push
ssh frappe@test.globedocket.com
ls
cd CascadeProjects
ls
git pull https://github.com/bakenegu/senior_project.git
git clone git@github.com:bakenegu/senior_project.git
git@github.com:bakenegu/senior_project.git
git pull https://github.com/bakenegu/4loop.git
ssh-keygen -t ed25519 -C "bakenegu@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github
git checkout main
git merge bakenegu
git push
npm run dev
ssh frappe@test.globedocket.com
ps aux | grep -i next
yarn dev
npm run dev
git push 
git reset --hard origin/main
sudo apt-get update
sudo apt-get upgrade windsurf
sudo apt-get update
sudo apt-get upgrade windsurf
ssh frappe@test.globedocket.com
git push
git pull
git push
git fetch origin && git pull --rebase origin main
git push origin main
npm run dev
sudo apt-get update
ls
cd CascadeProjects
ls
cd temari
ls
git pull
npm start
ssh frappe@test.globedocket.com
git add .
git commit -m "validation corrected"
git push
npm rundev
npm run dev
git reset --hard 9f27692f33d92e08094e4bd140ce64b644b99d4c
git push
# Step 1: Hard reset your local branch to the specific commit
git reset --hard 9f27692f33d92e08094e4bd140ce64b644b99d4c
# Step 2: Force push to the remote branch (e.g., 'main' or 'master')
git push origin HEAD --force

git commit -m "finalized validation"
git push
git add .
git commit -m "fixed error on typo"
git push
npm rundev
npm run dev
git status
git pull
npm run dev
git pull
npm run dev
git add .
git commit -m "navigation page fixed"
git push
yarn dev
npm run dev
npm run build
sudo apt-get update
sudo apt-get upgrade windsurf
git pull
npm start
npm install
npm start
git branch hpwork
git status
git checkout hpwork
git pull
git pull origin main
git pull origin master
git reset --hard 3a675e6690f294b93faabc4ed56ec7d49fa3a1e0
git push
ls
cd CasecadeProjects
cd CascadeProjects
ld
ls
cd temari
npm run build
open
.
npx nuxi@latest init nuxt-app
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
sudo apt update && sudo apt install -y curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm install --lts
node -v && npm -v
rm -rf nuxt-app
npx nuxi@latest init nuxt-app
npm run dev
xdg-open http://localhost:3001
chromium-browser http://localhost:3001
pkill -f "nuxt dev" || true
npm run dev
git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git branch -M main
git push -u origin main
git push
npm install
npm run dev
npx nuxi@latest init .
git rev-parse --is-inside-work-tree
git remote -v
git config --get remote.origin.url
git status -sb
git remote set-url origin https://github.com/GlobeDock-Academy/Teachers_webApp.git || git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git remote -v
git add .
git commit -m "chore: bootstrap Nuxt 3 (Nitro) app Teacherwebapp"
git branch -M main
git push -u origin main
git remote set-url origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git remote -v
git ls-remote https://github.com/GlobeDock-Academy/Teachers_webApp.git
git remote set-url origin git@github.com:GlobeDock-Academy/Teachers_webApp.git
ssh -T git@github.com
git push -u origin main
npm run dev
npm install
npm run dev
npm install -D @nuxtjs/tailwindcss
npm run dev
npm install
npm run build
node .output/server/index.mjs
lsof -i :3000
kill 8122
pkill -f "node .output/server/index.mjs"
pkill -f "nuxt dev"
node .output/server/index.mjs
npm run dev
npm start
pkill -f "nuxt dev" || true
lsof -i :3000
pkill -f "nuxt dev" || true
lsof -i :3000
curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/password?identifier=test%40test.com"
pkill -f "nuxt dev" || true
curl -s -i "http://localhost:3000/password?identifier=test%40test.com" | sed -n '1,40p'
pkill -f "nuxt dev" || true
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/home
git pull
git reset --hard 9ad3a21d56adb9066894603e56634460b73fb2c5
npm run dev
git branch bakenegu
git pull
git add .
git commit
git merge jb
git merge --hard jb
git reset --hard jb
git push
git push --force
npm run build
git push
pkill -f "nuxt dev" || true
rm -rf .nuxt node_modules/.vite && npm install
cd /home/biruk/Teacherwebapp && npm run dev
cd /home/biruk/Teacherwebapp && npm run dev
cd /home/biruk/Teacherwebapp && npm run dev
mkdir -p /home/biruk/Teacherwebapp/components
git pull
git merge main
git push
git switch main
git merge bakenegu
git push 
git push
git push --force
npm install libphonenumber-js
npm run build
npm run dev
ps aux | grep "next dev" | grep -v grep
curl -s http://localhost:3000 | head -20
npm run dev
npm run build
npm run dev
curl -I http://localhost:3000
pkill -f "next dev"
npm run build
npm run dev
npx tsc --noEmit
git switch
git switch main
git switch jb
git pull
git switch bakenegu
git merge jg
git merge jb
ps aux | grep -i "nuxt" | grep -v grep
npm run dev
rm -rf .nuxt .output node_modules/.vite && npm install
npm run dev
pgrep -f "nuxt dev" || echo "Nuxt dev server not running"
pgrep -f "nuxt dev" && echo "Nuxt dev server is already running" || npm run dev
npm remove vue-router
rm -rf .nuxt .output node_modules/.vite
npm install
npm run dev
npm install --save-dev @nuxtjs/tailwindcss@latest
pkill -f "nuxt" || true
npm install @vuepic/vue-datepicker
rm -rf node_modules .nuxt package-lock.json && npm install
rm -rf .nuxt .output node_modules/.vite && npm run dev
pkill -f "nuxt" || true
pkill -f "nuxt dev" || echo "No dev server running"
pgrep -f "nuxt dev" && echo "Nuxt dev server is running" || npm run dev
pgrep -f "nuxt dev" && kill $(pgrep -f "nuxt dev") || echo "No dev server running"
pkill -f "nuxt dev" || true
                                                                                                    pkill -f "nuxt dev"
npm run dev
lsof -i :3000
npm run dev
pkill -f "node"
git pull
git pull --force 9ad3a21d56adb9066894603e56634460b73fb2c5
git reser --hard origin/jb
git reset --hard origin/jb
git fetch --all
git fsck --full
git clone https://github.com/GlobeDock-Academy/Teachers_webApp Teacherwebapp
git pull
git pull origin jb
git fsck --full
git clone https://github.com/GlobeDock-Academy/Teacherwebapp.git
ls -al ~/.ssh
cat ~/.ssh/id_ed25519_github.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDqlPaC68NuN6x/ALvJZgHEd/pegEFkYsdj4VZiTOhQM bakenegu@gmail.com
ssh -T git@github.com
git clone git@github.com:GlobeDock-Academy/Teachers_webApp.git
git branch -a
git pull
npm run dev
npm install -D vue-tsc
npm run dev
cd /home/biruk/Teacherwebapp/Teachers_webApp
windsurf /home/biruk/Teacherwebapp/Teachers_webApp
git pull origin js
git pull origin jb
npm run dev
npm install
npm run dev
git add .
git commit -m "after corrupt re cloned successfully"
cd ..
git clone git@github.com:bakenegu/senior_project.git
ssh -T git@github.com
ssh-keygen -t ed25519 -C "your_email_for_bakenegu" -f ~/.ssh/id_ed25519_bakenegu
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_bakenegu
cat ~/.ssh/id_ed25519_bakenegu.pub   
where should i paste this one
cat ~/.ssh/id_ed25519_bakenegu.pub
git clone git@github.com:bakenegu/senior_project.git
git clone git@github.com:Abel-Gez/Stock_management_mobile_app.git
source /home/biruk/senior_project/.venv/bin/activate
sudo -u postgres psql
-- inside psql:
CREATE USER bakenegu WITH PASSWORD '@Bn199301';
CREATE DATABASE msme OWNER bakenegu;
GRANT ALL PRIVILEGES ON DATABASE msme TO bakenegu;
\q
cat > /home/biruk/senior_project/.env << 'EOL'
DATABASE_NAME=msme
DATABASE_USER=bakenegu
DATABASE_PASSWORD=@Bn199301
DATABASE_HOST=localhost
DATABASE_PORT=5432
EOL

pip install psycopg2-binary
python manage.py migrate
sudo -u postgres psql
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
lsof -i :8000
python manage.py shell -c "from accounts.models import User; u = User.objects.get(phone_number='+251991182262'); u.is_staff = True; u.save(); print('User is now a staff member')"
python manage.py runserver
# Find the process ID (PID) using port 8000
sudo lsof -i :8000
# Kill the process (replace 1234 with the actual PID from the command above)
kill 1234
python manage.py runserver
python manage.py runserver 8001
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable --now postgresql
sudo systemctl status postgresql
pg_isready
pip install -r requirements.txt
python3 -m pip install -r requirements.txt
python3 --version
python3 manage.py runserver
python3 -m ensurepip --upgrade
python3 manage.py runserver
sudo apt update && sudo apt install -y python3-pip python3-venv build-essential
python3 -m venv .venv
./.venv/bin/pip install -r requirements.txt
./.venv/bin/python manage.py migrate
./.venv/bin/python manage.py runserver 0.0.0.0:8000
cd /home/biruk/Stock_management_mobile_app/msmes_app
flutter --version
sudo snap install flutter --classic
flutter doctor
sudo apt-get update && sudo apt-get install -y openjdk-17-jdk android-sdk
sudo dpkg --configure -a
flutter pub get
flutter run -d chrome
flutter analyze
flutter run -d chrome
flutter doctor -v          # first lines show: "Flutter ... at /path/to/flutter"
git status
git remote -v
git branch -a
git fetch origin jb
git branch --set-upstream-to=origin/jb jb
git pull
git stash push -m "Temporary stash before pull"
git pull --rebase
set -e
cp pages/components.vue pages/components.vue.bak
awk 'BEGIN{cnt=0} { if ($0 ~ /^<template>$/) { cnt++; if (cnt==2) exit } print }' pages/components.vue > pages/components.vue.new && mv pages/components.vue.new pages/components.vue
cat > /tmp/program_showcase.html <<'EOF'
                <div class="mt-8">
                  <h2 class="text-xl font-semibold mb-4">Program Showcase</h2>
                  <div class="static mb-2.5 rounded-[18px] bg-surface-100 p-3">
                    <div class="flex flex-row">
                      <div>
                        <p class="text-preTitleMobile uppercase md:text-preTitle mb-2 text-primary-500">GET STARTED</p>
                        <p class="md:text-title3 mb-2 text-xl font-semibold">Begin your upskilling journey today!</p>
                        <p class="text-smallBody mb-2 text-onSurface-500">Learn 21st century teaching skills from international experts in our comprehensive training programs.</p>
                      </div>
                      <img src="/assets/program-card-model.webp" alt="" class="hidden h-[190px] align-bottom lg:block" />
                    </div>

                    <div class="hidden flex-row gap-2.5 md:flex">
                      <!-- Card 1 -->
                      <div class="h-min rounded-[12px] p-0.25 w-1/2" style="background:linear-gradient(118.49deg, rgb(255, 225, 89) 2.28%, rgb(185, 119, 253) 35.85%, rgb(67, 189, 214) 100%);box-shadow:rgba(120, 164, 208, 0.2) 0px 6px 15px 0px, rgba(74, 132, 190, 0.2) 0px 1px 2px 0px;">
                        <div class="flex flex-col justify-between rounded-[12px] bg-white p-2.5">
                          <div class="flex flex-col">
                            <div class="flex flex-row justify-between shadow-[inset_0px_4px_12px_#FFFFFF21]">
                              <p class="text-title4 mb-1">Teacher Training</p>
                            </div>
                            <div class="mt-1 flex items-center gap-1">
                              <div class="h-min rounded-lg bg-[#F4D7FF] px-1 py-0.5">
                                <p class="text-[10px] font-medium text-[#442768]">Recommended</p>
                              </div>
                            </div>
                            <p class="text-smallBody text-onSurface-500">Enhance your teaching skills with our specialized courses designed for modern educators.</p>
                            <div class="mt-1 flex items-center gap-2 text-onSurface-500">
                              <img src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='7'%20cy='7'%20r='6'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3cpath%20d='M7%203.5V7l2.5%201.5'%20stroke='%2364748B'%20stroke-width='1.2'%20stroke-linecap='round'/%3e%3c/svg%3e" alt="" class="mr-0.5" />
                              <p class="text-[12px]">10-12 Months • 100% Online</p>
                            </div>
                          </div>
                          <div class="mt-2 flex justify-end">
                            <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-primary [&_svg]:size-2">
                              Explore
                              <span class="ms-0.5">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                  <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors hover:bg-[linear-gradient(rgb(0_0_0/10%)_0_0)] focus:ring-2 focus:ring-offset-2 active:bg-[linear-gradient(rgb(0_0_0/20%)_0_0)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 text-white px-3 py-1.5 disabled:bg-onSurface-200 mt-2.5 w-full bg-black [&_svg]:size-2.5">
                            View Program
                          </button>
                        </div>
                      </div>

                      <!-- Card 2 -->
                      <div class="h-min rounded-[12px] p-0.25 w-1/2" style="background:linear-gradient(118.49deg, rgb(255, 225, 89) 2.28%, rgb(185, 119, 253) 35.85%, rgb(67, 189, 214) 100%);box-shadow:rgba(120, 164, 208, 0.2) 0px 6px 15px 0px, rgba(74, 132, 190, 0.2) 0px 1px 2px 0px;">
                        <div class="flex flex-col justify-between rounded-[12px] bg-white p-2.5">
                          <div class="flex flex-col">
                            <div class="flex flex-row justify-between shadow-[inset_0px_4px_12px_#FFFFFF21]">
                              <p class="text-title4 mb-1">Advanced Program</p>
                            </div>
                            <div class="mt-1 flex items-center gap-1">
                              <div class="h-min rounded-lg bg-[#F4D7FF] px-1 py-0.5">
                                <p class="text-[10px] font-medium text-[#442768]">Recommended</p>
                              </div>
                            </div>
                            <p class="text-smallBody text-onSurface-500">Build deeper expertise with advanced modules and mentor support.</p>
                            <div class="mt-1 flex items-center gap-2 text-onSurface-500">
                              <img src="data:image/svg+xml,%3csvg%20width='14'%20height='12'%20viewBox='0%200%2014%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1.25'%20width='12'%20height='9'%20rx='1.5'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3cpath%20d='M4.5%203V1.75h5V3'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3c/svg%3e" alt="" class="mr-0.5" />
                              <p class="text-[12px]">6 Months • Blended</p>
                            </div>
                          </div>
                          <div class="mt-2 flex justify-end">
                            <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-primary [&_svg]:size-2">
                              Explore
                              <span class="ms-0.5">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                  <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors hover:bg-[linear-gradient(rgb(0_0_0/10%)_0_0)] focus:ring-2 focus:ring-offset-2 active:bg-[linear-gradient(rgb(0_0_0/20%)_0_0)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 text-white px-3 py-1.5 disabled:bg-onSurface-200 mt-2.5 w-full bg-black [&_svg]:size-2.5">
                            View Program
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
EOF

awk '{ if ($0 == "            </ContentContainer>") { system("cat /tmp/program_showcase.html") } print }' pages/components.vue > pages/components.vue.new && mv pages/components.vue.new pages/components.vue
set -e
FILE=pages/components.vue
cp "$FILE" "$FILE.bak"
# Remove the accidentally appended second <template> and anything after it
awk 'BEGIN{cnt=0} { if ($0 ~ /^<template>$/) { cnt++; if (cnt==2) exit } print }' "$FILE" > "$FILE.new" && mv "$FILE.new" "$FILE"
# Prepare the Program Showcase section
cat > /tmp/program_showcase.html <<'EOF'
                <div class="mt-8">
                  <h2 class="text-xl font-semibold mb-4">Program Showcase</h2>
                  <div class="static mb-2.5 rounded-[18px] bg-surface-100 p-3">
                    <div class="flex flex-row">
                      <div>
                        <p class="text-preTitleMobile uppercase md:text-preTitle mb-2 text-primary-500">GET STARTED</p>
                        <p class="md:text-title3 mb-2 text-xl font-semibold">Begin your upskilling journey today!</p>
                        <p class="text-smallBody mb-2 text-onSurface-500">Learn 21st century teaching skills from international experts in our comprehensive training programs.</p>
                      </div>
                      <img src="/assets/program-card-model.webp" alt="" class="hidden h-[190px] align-bottom lg:block" />
                    </div>

                    <div class="hidden flex-row gap-2.5 md:flex">
                      <!-- Card 1 -->
                      <div class="h-min rounded-[12px] p-0.25 w-1/2" style="background:linear-gradient(118.49deg, rgb(255, 225, 89) 2.28%, rgb(185, 119, 253) 35.85%, rgb(67, 189, 214) 100%);box-shadow:rgba(120, 164, 208, 0.2) 0px 6px 15px 0px, rgba(74, 132, 190, 0.2) 0px 1px 2px 0px;">
                        <div class="flex flex-col justify-between rounded-[12px] bg-white p-2.5">
                          <div class="flex flex-col">
                            <div class="flex flex-row justify-between shadow-[inset_0px_4px_12px_#FFFFFF21]">
                              <p class="text-title4 mb-1">Teacher Training</p>
                            </div>
                            <div class="mt-1 flex items-center gap-1">
                              <div class="h-min rounded-lg bg-[#F4D7FF] px-1 py-0.5">
                                <p class="text-[10px] font-medium text-[#442768]">Recommended</p>
                              </div>
                            </div>
                            <p class="text-smallBody text-onSurface-500">Enhance your teaching skills with our specialized courses designed for modern educators.</p>
                            <div class="mt-1 flex items-center gap-2 text-onSurface-500">
                              <img src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='7'%20cy='7'%20r='6'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3cpath%20d='M7%203.5V7l2.5%201.5'%20stroke='%2364748B'%20stroke-width='1.2'%20stroke-linecap='round'/%3e%3c/svg%3e" alt="" class="mr-0.5" />
                              <p class="text-[12px]">10-12 Months • 100% Online</p>
                            </div>
                          </div>
                          <div class="mt-2 flex justify-end">
                            <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-primary [&_svg]:size-2">
                              Explore
                              <span class="ms-0.5">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                  <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors hover:bg-[linear-gradient(rgb(0_0_0/10%)_0_0)] focus:ring-2 focus:ring-offset-2 active:bg-[linear-gradient(rgb(0_0_0/20%)_0_0)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 text-white px-3 py-1.5 disabled:bg-onSurface-200 mt-2.5 w-full bg-black [&_svg]:size-2.5">
                            View Program
                          </button>
                        </div>
                      </div>

                      <!-- Card 2 -->
                      <div class="h-min rounded-[12px] p-0.25 w-1/2" style="background:linear-gradient(118.49deg, rgb(255, 225, 89) 2.28%, rgb(185, 119, 253) 35.85%, rgb(67, 189, 214) 100%);box-shadow:rgba(120, 164, 208, 0.2) 0px 6px 15px 0px, rgba(74, 132, 190, 0.2) 0px 1px 2px 0px;">
                        <div class="flex flex-col justify-between rounded-[12px] bg-white p-2.5">
                          <div class="flex flex-col">
                            <div class="flex flex-row justify-between shadow-[inset_0px_4px_12px_#FFFFFF21]">
                              <p class="text-title4 mb-1">Advanced Program</p>
                            </div>
                            <div class="mt-1 flex items-center gap-1">
                              <div class="h-min rounded-lg bg-[#F4D7FF] px-1 py-0.5">
                                <p class="text-[10px] font-medium text-[#442768]">Recommended</p>
                              </div>
                            </div>
                            <p class="text-smallBody text-onSurface-500">Build deeper expertise with advanced modules and mentor support.</p>
                            <div class="mt-1 flex items-center gap-2 text-onSurface-500">
                              <img src="data:image/svg+xml,%3csvg%20width='14'%20height='12'%20viewBox='0%200%2014%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1.25'%20width='12'%20height='9'%20rx='1.5'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3cpath%20d='M4.5%203V1.75h5V3'%20stroke='%2364748B'%20stroke-width='1.2'/%3e%3c/svg%3e" alt="" class="mr-0.5" />
                              <p class="text-[12px]">6 Months • Blended</p>
                            </div>
                          </div>
                          <div class="mt-2 flex justify-end">
                            <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-primary [&_svg]:size-2">
                              Explore
                              <span class="ms-0.5">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                                  <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-interactive-400 transition-colors hover:bg-[linear-gradient(rgb(0_0_0/10%)_0_0)] focus:ring-2 focus:ring-offset-2 active:bg-[linear-gradient(rgb(0_0_0/20%)_0_0)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 text-white px-3 py-1.5 disabled:bg-onSurface-200 mt-2.5 w-full bg-black [&_svg]:size-2.5">
                            View Program
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
EOF

# Insert before the closing of ContentContainer
awk 'BEGIN{inserted=0} { if (inserted==0 && $0 ~ /<\/ContentContainer>/) { system("cat /tmp/program_showcase.html"); inserted=1 } print }' "$FILE" > "$FILE.new" && mv "$FILE.new" "$FILE"
sed -n '1,235p;319,$p' -i pages/components.vue || (TMP=$(mktemp) && awk 'NR<236 || NR>318' pages/components.vue > "$TMP" && mv "$TMP" pages/components.vue)
cd /home/biruk/Teacherwebapp/Teachers_webApp && npm run build --dry-run 2>&1 | head -20
cd /home/biruk/Teacherwebapp/Teachers_webApp && cp pages/index.vue pages/index.vue.backup
cd /home/biruk/Teacherwebapp/Teachers_webApp && cat > pages/index.vue << 'EOF'
<template>
  <div class="page-container">
    <ClientOnly>
      <template #default>
        <div class="flex flex-col min-h-screen">
          <!-- Sticky top nav -->
          <div class="sticky top-0 z-50 bg-white border-b border-onSurface-200 h-[62px] flex items-center">
            <div class="w-full">
              <!-- Logo with exact positioning -->
              <NuxtLink to="/" class="absolute left-[287px] top-1/2 -translate-y-1/2 flex items-center h-full">
                <img
                  src="/logo 2.png"
                  style="max-width: 150px;"
                />
              </NuxtLink>
              
              <!-- Navigation menu with Suraasa styling -->
              <!-- No navigation on sign-in page -->
            </div>
          </div>

          <!-- Main content -->
          <main class="flex-grow flex flex-col">
            <ContentContainer>
              <div class="flex justify-center w-full py-8">
                <div class="w-full sm:m-auto sm:w-[500px] sm:rounded-xl sm:bg-white sm:p-[30px] sm:[box-shadow:1px_1px_5px_rgb(0_0_0/10%)] p-2.5">
                  <form class="w-full">
                    <template v-if="step === 'email'">
                      <div class="block">
                        <p class="text-title1Mobile !tracking-[-0.04em] lg:text-title1">Sign in to Suraasa</p>
                        <p class="mb-4 text-subtitle2Mobile !tracking-[-0.021em] text-muted lg:text-subtitle2">One account for everything on Suraasa.</p>
                        <div class="flex justify-between">
                          <label class="mb-0.75 inline-block first-letter:uppercase">
                            <p class="text-body font-semibold">Email or phone number</p>
                          </label>
                          <NuxtLink :to="`/forgot-password?identifier=${encodeURIComponent(identifier)}`" tabindex="-1">
                            <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-[13px] leading-[16px] font-medium text-[#4666F6] [&_svg]:size-2">Forgot Password?</button>
                          </NuxtLink>
                        </div>
                        <div class="relative w-full">
                          <div class="flex h-[44px] w-full items-center rounded-md border border-onSurface-800 bg-white ring-interactive-400 focus-within:ring-2 focus-within:ring-offset-1">
                            <input
                              id=":r0:"
                              v-model="identifier"
                              type="text"
                              class="w-full grow rounded-md bg-transparent px-1.5 py-1 text-body placeholder-onSurface-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              name="identifier"
                              placeholder="Enter your email or phone number"
                              autocomplete="username"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          @click.prevent="onNext"
                          class="relative inline-flex items-center justify-center overflow-hidden rounded-lg text-button ring-blue-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 text-white px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-onSurface-200 mt-3 w-full [&_svg]:size-2.5"
                        >
                          Next
                          <span class="ms-1">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                              <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span>
                        </button>
                        <div class="mt-6 text-center text-sm">
                          <p class="text-gray-600">
                            Don't have an account?
                            <NuxtLink to="/signup" class="font-medium text-blue-600 hover:text-blue-800">Sign up for free</NuxtLink>
                          </p>
                        </div>
                      </div>
                    </template>

                    <template v-else>
                      <div class="flex items-center mb-6">
                        <button
                          type="button"
                          @click="step = 'email'"
                          class="text-blue-600 hover:text-blue-800 mr-2"
                        >
                          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                          </svg>
                        </button>
                        <h1 class="text-2xl font-bold">Enter your password</h1>
                      </div>

                      <div class="space-y-4">
                        <div class="mb-1 flex items-center rounded-lg border border-onSurface-200 bg-onSurface-100 p-1 shadow-md">
                          <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {{ identifier.charAt(0).toUpperCase() }}
                          </div>
                          <div class="ml-1 truncate">
                            <p class="text-sm font-medium text-gray-900 truncate">{{ identifier }}</p>
                            <button
                              type="button"
                              @click="step = 'email'"
                              class="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div>
                          <div class="flex justify-between items-center mb-1">
                            <label for="password" class="block text-sm font-medium text-gray-700">
                              Password
                            </label>
                            <NuxtLink
                              :to="`/forgot-password?identifier=${encodeURIComponent(identifier)}`"
                              tabindex="-1"
                            >
                              <button type="button" class="relative inline-flex items-center justify-center overflow-hidden rounded-lg ring-interactive-400 transition-colors focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface-400 px-1 py-0.5 hover:bg-onSurface-100 active:bg-onSurface-200 hover:bg-none active:bg-none text-[13px] leading-[16px] font-medium text-[#4666F6] [&_svg]:size-2">
                                Forgot Password?
                              </button>
                            </NuxtLink>
                          </div>
                          <div class="flex h-[44px] w-full items-center rounded-md border border-gray-700 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-1">
                            <input
                              id="password"
                              v-model="password"
                              :type="showPassword ? 'text' : 'password'"
                              class="w-full grow rounded-md bg-transparent px-1.5 py-1 text-sm placeholder-gray-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Enter your password"
                              autocomplete="current-password"
                            />
                            <button
                              type="button"
                              @click="togglePasswordVisibility"
                              class="shrink-0 pe-1 text-blue-600"
                              :title="showPassword ? 'Hide password' : 'Show password'"
                            >
                              <svg v-if="showPassword" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
                                <path d="M3 13C6.6 5 17.4 5 21 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                <path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                              </svg>
                              <svg v-else width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
                                <path d="M3 13C6.6 5 17.4 5 21 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                <path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          @click="onSignIn"
                          class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          :disabled="!password"
                        >
                          Sign in
                          <span class="ms-1">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                              <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </template>
                  </form>
                </div>
              </div>
            </ContentContainer>
          </main>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from 'nuxt/app'
import ContentContainer from '~/components/ContentContainer.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'

type LoginStep = 'email' | 'password'

// Single-page login flow state
const step = ref<LoginStep>('email')
const identifier = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)

function onNext(): void {
  if (!identifier.value.trim()) return
  step.value = 'password'
}

function togglePasswordVisibility(): void {
  showPassword.value = !showPassword.value
}

function onSignIn(): void {
  if (!password.value.trim()) return
  // Use navigateTo for Nuxt navigation when possible
  navigateTo('/home')
}
</script>

<style scoped>
/* Using Tailwind classes directly in template instead of @apply */
</style>
EOF

cd /home/biruk/Teacherwebapp/Teachers_webApp && npm run dev 2>&1 | head -10
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && echo "Please provide your Git repository URL (e.g., https://github.com/username/repo.git):"
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && echo "Please provide your Git repository URL (e.g., https://github.com/username/repo.git or git@github.com:username/repo.git):"
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git pull
git pull origin jb
git pull origin/jb
git checkout jb
git pull
git pull origin jb
git pull jb
git pull origin jb
git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
git fetch origin
git -C /home/biruk/Teacherwebapp/Teachers_webApp rev-parse --is-inside-work-tree
git -C /home/biruk/Teacherwebapp/Teachers_webApp status
git -C /home/biruk/Teacherwebapp/Teachers_webApp remote -v
git pull
git remote -v
git push
git pull
git branch backnegu
git branch bakenegu
git remote -v
git push 
git status
git remote -v
git add .
git config --global user.name "Bakenegu502"
git config --global user.email "biruk.negu@globedocket.com"
git branch bakenegu
git fetch
cd /home/biruk/Teacherwebapp/Teachers_webApp && npm run dev 2>&1 | head -20
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb
cd /home/biruk/Teacherwebapp/Teachers_webApp && grep -n "navigateTo" pages/signup-onboarding.vue
cd /home/biruk/Teacherwebapp/Teachers_webApp && grep -n "<script" pages/signup-onboarding.vue
cd /home/biruk/Teacherwebapp/Teachers_webApp && grep -n "^<script" pages/signup-onboarding.vue
cd /home/biruk/Teacherwebapp/Teachers_webApp && npm run dev 2>&1 | head -20
ps aux | grep -i "nuxt" | grep -v grep
npm run dev
cd /home/biruk/Teacherwebapp/Teachers_webApp && grep -l "navigateTo" pages/ai-tools/*.vue
cd /home/biruk/Teacherwebapp/Teachers_webApp && grep -n "<script" pages/ai-tools/subjective-assessment.vue
cd /home/biruk/Teacherwebapp/Teachers_webApp && npm run dev 2>&1 | head -10
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git fetch origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull origin master
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote --heads origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote remove origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote add origin https://github.com/GlobeDock-Academy/Teachers_webApp.git
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git fetch origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote --heads origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git config --list | grep -i user
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git config --global --list | grep -i user
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git config --global user.name "Biruk" && git config --global user.email "biruk@example.com"
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin master
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -m master main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git checkout -b jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git fetch origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch --set-upstream-to=origin/jb jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote --heads origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb --force
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git fetch origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git checkout -b jb origin/jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote --heads origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb --force
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git status
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git log --oneline -n 5
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git remote -v
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git branch -a
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git ls-remote --heads origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git push -u origin main:jb --force
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git fetch origin
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git checkout -b jb origin/jb
cd /home/biruk
cd /home/biruk/Teacherwebapp/Teachers_webApp && git pull
cd /home/biruk
git -C /home/biruk/Teacherwebapp/Teachers_webApp remote set-url origin git@github.com:GlobeDock-Academy/Teachers_webApp.git
cd [200~/home/biruk~
cd /home/biruk
git clone git@github.com:GlobeDock-Academy/Teachers_webApp.git
ls
cd Teachers_webApp
windsurf .
git merge jb
git switch jb
git pull
git switch
git switch bakenegu
git push
git pull
git merge jb
git push
npm install
npm run dev
pkill -f "nuxt" || true
pkill -f "nuxt|node" || true
rm -rf .nuxt node_modules/.vite node_modules/.cache/vite 2>/dev/null || true
npm run dev
git push
npm run dev
pkill -f "nuxt" || true
rm -rf .nuxt node_modules/.vite node_modules/.cache
npm cache clean --force
npm run dev
sudo apt-get update
sudo apt-get upgrade windsurf
rm /home/biruk/Teachers_webApp/pages/ai-tools.vue
rm -rf .nuxt node_modules/.vite
npm run dev
npm run 
npm run dev
git push
git switch
git switch main
git push
git merge bakenegu
git push
ss -tulpn | grep -E ":3000\b" || true
npm run dev
ss -tulpn | grep -E ":3000\b" || true
xdg-open http://localhost:3000 >/dev/null 2>&1 || true
ps aux | grep "next dev" | grep -v grep
npm run dev
npm run dev
ssh frappe@test.globedocket.com
git add .
git commit "duplicated header fixed on the detailed blog page"
yarn dev
npm run dev
DEBUG=* npx next dev
pkill -f "next dev"
node --version && npm --version
npm install
npm run dev
git status
git commit -m "fix: remove duplicate navigation from blog detail page"
git push origin main
npm run dev
git checkout main
git pull
git checkout bakenegu
git merge main
git switch main
git add .
git commit "version 2.0"
git status
git fetch
git status -sb
git diff --cached
git switch bakenegu
git merge main
git status -sb
npm run dev
git switch jb
git branch
git fetch --all 
git branch -r
git switch jb
git pull
git switch bakenegu
git pull origin jb
git status
git push
git add .
git commit -m "before merge with jb just before publish
"
git push
git checkout jb
git pull
git checkout bakenegu
git merege jb
git merge jb
git push
# Make sure you are on your branch
git checkout bakenegu
# Push your branch to main, overwriting it
git push origin bakenegu:main --force
ps -p $(cat .nuxtrunpid 2>/dev/null)
ps -ef | grep "nuxt dev" | grep -v grep
npm run dev
npx nuxi dev --host 0.0.0.0 --port 4000
command -v xdg-open >/dev/null 2>&1 && xdg-open http://localhost:3000 >/dev/null 2>&1
command_status 51
echo ""
git rev-parse --show-toplevel
ls
npm run dev
ss -lntp | grep :4000 || true
lsof -i :4000 -sTCP:LISTEN -Pn || true
hostname -I | awk '{print $1}'
curl -s http://127.0.0.1:4000/learning -I | head -n 1 || echo "Curl failed"
curl -s http://192.168.4.185:4000/learning -I | head -n 1 || echo "Curl failed"
echo "Server is running on 0.0.0.0:4000. Opening browser preview..."
command -v xdg-open >/dev/null 2>&1 && xdg-open http://localhost:4000/learning >/dev/null 2>&1 || true
echo "If the browser didn't open automatically, please visit:
- Local: http://localhost:4000/learning
- LAN: http://192.168.4.185:4000/learning"
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:4000/home; curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:4000/learning
pkill -f 'node.*nuxt' || true
rm -rf .nuxt .output node_modules/.vite
npx nuxi dev --host 0.0.0.0 --port 4000
command_status 63
npm run dev
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4000
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4000/home
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4000/signup-onboarding
curl -s http://127.0.0.1:4000/signup-onboarding 2>&1 | head -50
sleep 3 && curl -s http://127.0.0.1:4000/signup-onboarding 2>&1 | grep -i "nav" | head -5
sleep 2 && curl -s http://127.0.0.1:4000/signup-onboarding 2>&1 | grep -c "nav class"
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4000/signup-onboarding
curl -s http://127.0.0.1:4000/signup-onboarding 2>&1 | grep -E "(Please verify your email|nav-link)" | head -3
pkill -f 'node.*nuxt' || true
npx nuxi dev --host 0.0.0.0 --port 4000
hostname -I | awk '{print $1}'
npm run dev -- --host --port 3001
ss -lntp | sed -n '1,120p'
lsof -i :3001 -sTCP:LISTEN -Pn || true
ufw status || true
npm run dev -- --port 3002 --host 0.0.0.0
ss -lntp | grep -E ":(3002|3001|3000)\s" || true
NUXT_HOST=0.0.0.0 NUXT_PORT=4000 npm run dev
command_status 71
command
ls /proc/71
echo dev server check
command_status 71
echo ""
npm run dev
npm run dev
ssh frappe@test.globedocket.com
sudo su
ssh frappe@test.globedocket.com
git push
git switch jb
git pull
git merge bakenegu
git push origin main
git switch main
git merge jb
git push
npm run dev
cd /home/biruk/Teachers_webApp && npm run dev
lsof -i :3000
npm start
git pull origin main
git pull origin master
git pull
git pull origin
ls -la public/data/
touch public/data/test_write && echo 'Writable' || echo 'Not writable'
curl -X POST 'http://localhost:3000/api/resources.php?action=save&levelId=1&grade=9&subject=math&resourceType=books' -H 'Content-Type: application/json' -d '{"resources":[{"title":"Test Book","url":"https://example.com/test"}]}'
php -S localhost:8000 -t public/
which php
mkdir -p public/data && echo '{}' > public/data/resources.json && chmod 666 public/data/resources.json
npm run build
npm run dev
npm start
git push
npm start
npm install use-debounce
npm run build
git pull
npm run dev
git push
npm run dev
git checkout jb
git checkout bakenegu
git merge jb
git checkout main
git merge jb
git fetch
git merge jb
git checkout jb
git checkout main
git checkout jb
git pull
git checkout main
git checkout jb
git checkout main
git checkout jb -- pages/ai-tools.vue pages/ai-tools/
git add .
git commit -m "fixed error caused by biruk regarding ai-tools "
git push
cd /home/biruk/Teachers_webApp && rm -rf .nuxt
cd /home/biruk/Teachers_webApp && npm run dev
mv pages/ai-tools.vue pages/ai-tools-root.vue
npm run dev
sudo apt update
sudo apt install -y zaproxy
# install Snap if needed
sudo apt update
sudo apt install -y snapd
sudo systemctl enable --now snapd
# (sometimes needed on older setups)
sudo ln -s /var/lib/snapd/snap /snap 2>/dev/null || true
# install ZAP
sudo snap install zaproxy --classic
snap run zaproxy &
git status
git branch
[200~which firefox
~which firefox
which firefox
cd /usr/bin/firefox
cd usr/bin/firefox
cd /usr
ls
cd bin
cd firefox
ls
cd ..
cd .
cd
hostname -I
sudo apt-get update
sudo apt-get upgrade windsurf
git add .
git commit -m "verison one"
git push
git remote add origin https://github.com/bakenegu/koricho.git
git push --set-upstream origin master
git push
git remote add origin https://github.com/bakenegu/koricho.git
git remote -v
git remote set-url origin https://github.com/bakenegu/koricho.git
git push
git remote remove origin
git remote add origin https://github.com/bakenegu/koricho.git
git remote -v
git push --set-upstream origin master
git push --force origin master
pnpm install
npm install
npm install --legacy-peer-deps
npm run dev
[200~# Save into your local Downloads folder
scp frappe@test.globedocket.com:/home/frappe/knowledgebase/data/destinations.json ~/Downloads/
ssh frappe@test.globedocket.com
ssh frappe@test.globedocket.com
ssh frappe@test.globedocket.com
git push
eval 'xdg-open http://localhost:3000 >/dev/null 2>&1 || true'
npm run dev
git push
eval 'npm run dev'
node -v
npm -v
ssh frappe@test.globedocket.com
npm run dev
eval "ps -ef | grep 'next dev'"
eval 'curl -I http://localhost:3000'
git add .
git commit -m "floating animation"
git push
npm run dev
git add .
git commit -m "water flow all over the page"
git psuh
git push
npm run dev
git add .
git commit -m "updates on the three things"
git push
ssh frappe@test.globedocket.com
sudo apt update
sudo apt install nodejs npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
node -v
npm -v
npx create-next-app@latest rntutorial --typescript
cd rntutorial
npm run dev
npm run build
npm run dev
npm run build
npm run dev
lsb_release -a
# add PPA (optional but gives newer qBittorrent builds)
sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable -y
sudo apt update
sudo apt install qbittorrent -y
qbittorrent

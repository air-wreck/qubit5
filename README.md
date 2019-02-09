# qubit5
> live stats for QuBIT V quizbowl tournament @ High Tech

## about QuBIT
QuBIT is an annual quizbowl tournament run by the High Technology High School academic team (Linroft, NJ). This year's tournament will take place on Feburary 9th, 2019 on the RMBAT set. For more information, consult our [forum post](http://www.hsquizbowl.org/forums/viewtopic.php?f=1&p=349958).

## about this repository
Scorekeeping for QuBIT is handled internally in Google Sheets. This repository exists to contain the latest SQBS files and serve "live" stats generated from these files in the `docs/` directory. It's fairly straightforward. Just save the generated HTML report from SQBS in `docs/` with the base name `prelims`, `playoffs`, or `combined`, as appropriate. Run `./build.sh [base name]`, commit, and push!

Also, change the redirect URL if appropriate.


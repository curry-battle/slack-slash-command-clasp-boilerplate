## Slack Slash Command with GAS by Clasp Boilerplate

include

- clasp
- biome

## How to Use

### Create Slack App

1. Create Slack App
    - https://api.slack.com/apps
1. Note the Verification Token
1. Install to Workspace

### Create GAS File

1. Create GAS file
1. Note the script ID
1. Set Verification Token as `SLACK_VERIFICATION_TOKEN` in script properties

## Edit Code and Push

Init

```sh
npm i

mv .clasp.json.sample .clasp.json
vim .clasp.json // input your script ID
```

Push to remote GAS

```sh
clasp login
clasp push
```

Open GAS in your browser!

```sh
clasp open
```

## GAS Deployment as Web App

1. Deploy as a web app
1. Set yourself as `Run as`
    - This is probably OK.
1. Set __Anyone, Even Anonymous__ as `Who has access to the app`

   - Otherwise, `dispatch_failed` will be returned.  
     You can't execute from Slack without this setting.  
     Security risks are avoided by checking with `SLACK_VERIFICATION_TOKEN`.
   - If you cannot set it to __Anyone, Even Anonymous__, you will need to change your organization's external sharing policy from the Google Workspace Admin Console to allow sharing in the __Anyone with the link__ format.

1. After deployment, note the URL of the web app

## Configure Slack App

1. Set as SlashCommands
1. Create New Command
1. Set the URL of the web app in the Request URL

## Fire

Run your slash command on Slack!

## Reference

- https://qiita.com/rubita/items/c58ba926d669ff51c88c

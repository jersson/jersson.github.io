while getopts ":f:" opt; do
  case $opt in
    f)
      case $OPTARG in
        summary)
          echo "🤖Deploying summary service..." >&2
          cd ./summary && exec ./deploy.sh && cd .. 
          ;;
        locations)
          echo "🤖Deploying locations service..." >&2
          cd ./locations && exec ./deploy.sh && cd .. 
          ;;
        topregional)
          echo "🤖Deploying topregional service..." >&2
          cd ./topregional && exec ./deploy.sh && cd .. 
          ;;
        cases)
          echo "🤖Deploying case service..." >&2
          cd ./cases && exec ./deploy.sh && cd .. 
          ;;
        all)
        # to be fixed?
          echo "🤖Deploying all services..." >&2
          cd ./summary && exec ./deploy.sh && cd .. 
          cd ./locations && exec ./deploy.sh && cd .. 
          cd ./topregional && exec ./deploy.sh && cd .. 
          cd ./cases && exec ./deploy.sh && cd .. 
          ;;
        other)
          echo "other files" >&2
          ;;
      esac
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done
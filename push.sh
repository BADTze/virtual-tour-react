git config --global http.sslVerify false
git push
git remote set-url origin https://repository.aio.co.id/enurlustiawan/utility-virtual-tour.git
git remote -v
git push origin deployment
git remote set-url origin https://github.com/BADTze/virtual-tour-react.git
git remote -v
git config --global http.sslVerify true

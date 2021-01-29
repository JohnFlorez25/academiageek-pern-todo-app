# PERN project in GCP
- [Instalar dnsutils](https://www.tecmint.com/install-dig-and-nslookup-in-linux/)
- [Obtener Ip Pública](https://www.cyberciti.biz/faq/how-to-find-my-public-ip-address-from-command-line-on-a-linux/)
- `sudo apt install dnsutils -y``
- `myip="$(dig +short myip.opendns.com @resolver1.opendns.com)"`
- `echo "My WAN/Public IP address: ${myip}"`

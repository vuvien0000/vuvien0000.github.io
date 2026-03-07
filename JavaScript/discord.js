// thank you duducat/ducdat0507
let params = new URLSearchParams("?invite=GNQ2CUYyYp");
            let invite = params.get("invite");
            let style = params.get("style");
            
            fetch("https://discord.com/api/v9/invites/" + invite + "?with_counts=true")
                .then(res => res.json())
                .then((out) => {
                    if (out.guild.banner) banner.style.backgroundImage = "url(https://cdn.discordapp.com/banners/" + out.guild.id + "/" + out.guild.banner + "?size=" + Math.max(screen.width, screen.height) + ")";
                    icon.src = "https://cdn.discordapp.com/icons/" + out.guild.id + "/" + out.guild.icon;

                    invitername.innerText = out.inviter.username;
                    invitertag.innerText = out.inviter.discriminator;

                    servername.innerText = out.guild.name;

                    membercount.innerText = (+out.approximate_member_count).toLocaleString("en-US");
                    onlinecount.innerText = (+out.approximate_presence_count).toLocaleString("en-US");
                    boostcount.innerText = (+out.guild.premium_subscription_count).toLocaleString("en-US");
                

                }
            )
var gicon = "7ecd6120cdd9247a6102a043bbc29262" ;

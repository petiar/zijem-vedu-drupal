<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          @font-face {
            font-family: 'Objektiv Mk1';
            src: url("/themes/custom/zijem_vedu/font/objektiv-mk1-medium/ObjektivMk1-Medium.woff2") format("woff2"), url("../font/objektiv-mk1-medium/ObjektivMk1-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Objektiv Mk1";
            src: url("/themes/custom/zijem_vedu/font/objektiv-mk1-xbold/4977957c89851357e46a14aed949a313.woff2") format("woff2"), url("../font/objektiv-mk1-xbold/4977957c89851357e46a14aed949a313.woff") format("woff");
            font-weight: 700;
          }

          @font-face {
            font-family: 'Sofia Pro Soft Bold';
            src: url("/themes/custom/zijem_vedu/font/sofia-pro-soft-bold/SOFIAPROSOFTBOLD.eot");
            src: local("SOFIAPROSOFTBOLD"), url("../font/sofia-pro-soft-bold/SOFIAPROSOFTBOLD.woff") format("woff"), url("../font/sofia-pro-soft-bold/SOFIAPROSOFTBOLD.ttf") format("truetype");
          }
          #content {
            width: 700px;
            margin: 0 auto;
            background: #FFF;
            padding: 30px;
            border-radius: 1em;
            box-shadow: 0px 0px 2px #5D5D5D;
          }
          #channel-image {
            float: right;
            width: 200px;
            margin-bottom: 20px;
          }
          #channel-image img {
            width: 200px;
            height: auto;
            border-radius: 5px;
          }
          #channel-header {
            margin-bottom: 20px;
          }
          .channel-item {
            clear: both;
            border-top: 1px solid #E5E5E5;
            padding: 20px;
          }
          .episode-image img, .channel-item img {
            width: 100px;
            height: auto;
            margin: 0 30px 15px 0;
            border-radius: 5px;
          }
          .episode_meta {
            font-size: 11px;
            font-weight: bold;
          }

          html {
            box-sizing: border-box;
          }

          html *, html *:before, html *:after {
            box-sizing: border-box;
          }

          html body {
            background-color: #ffffff;
            color: #27013D;
            font-family: "Objektiv Mk1";
          }

          a {
            color: #5104CE;
          }

          a:hover {
            color: #660bfa;
          }

          u {
            text-decoration-color: rgba(255, 0, 215, 0.6);
          }

          .image {
            float:left;
          }

          .explanation {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <p class="explanation">
            Toto je podcast feed (kanál) pre podcast Žijem wedu. Použitím URL (odkazu, linku) tejto stránky (<strong>https://zijemvedu.sk/feed/podcast</strong>) si ho môžeš otvoriť a počúvať vo svojej obľúbenej podcast aplikácii.
          </p>
          <div id="channel-header">
            <h1>
              <xsl:if test="/rss/channel/image">
                <div id="channel-image">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="/rss/channel/image/link"/>
                    </xsl:attribute>
                    <img>
                      <xsl:attribute name="src">
                        <xsl:value-of select="/rss/channel/image/url"/>
                      </xsl:attribute>
                      <xsl:attribute name="title">
                        <xsl:value-of select="/rss/channel/image/title"/>
                      </xsl:attribute>
                    </img>
                  </a>
                </div>
              </xsl:if>
              <xsl:value-of select="/rss/channel/title"/>
            </h1>
            <p>
              <xsl:value-of select="/rss/channel/description"/>
            </p>
            <p>
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="/rss/channel/link"/>
                </xsl:attribute>
                <xsl:attribute name="target">_blank</xsl:attribute>
                Webstránka podcastu &#x0226B;
              </a>
            </p>
          </div>
          <xsl:for-each select="/rss/channel/item">
            <div class="channel-item">
              <h2>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:attribute name="target">_blank</xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <xsl:if test="image">
                <img class="image">
                  <xsl:attribute name="src">
                    <xsl:value-of select="image/url"/>
                  </xsl:attribute>
                  <xsl:attribute name="title">
                    <xsl:value-of select="image/title"/>
                  </xsl:attribute>
                </img>
              </xsl:if>
              <xsl:if test="description">
                <p>
                  <xsl:value-of select="description" disable-output-escaping="yes"/>
                </p>
              </xsl:if>
              <p class="episode_meta">
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="enclosure/@url"/>?ref=download
                  </xsl:attribute>
                  <xsl:attribute name="download"></xsl:attribute>
                  Stiahnuť epizódu
                </a> |
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="enclosure/@url"/>?ref=new_window
                  </xsl:attribute>
                  <xsl:attribute name="target">_blank</xsl:attribute>
                  Prehrať v novom okne
                </a> |
                Veľkosť súboru: <xsl:value-of select='format-number(number(enclosure/@length div "1024000"),"0.0")'/>MB
              </p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

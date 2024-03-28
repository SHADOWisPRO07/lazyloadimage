<script type='text/javascript'>

//<![CDATA[

(function() {
    var jumlah = 7;
    let post = document.querySelectorAll('.post-body p'), 
        a = jumlah + 1,
        b = post.length / a,
        c = Array.from({ length: jumlah }, (redfx, blufx) => blufx + 1);

    for (let d = 0; d < c.length; d++) {
        let e = c[d],
            f = parseInt((b * e)),
            g = document.createElement('div');
        g.className = 'gourabdesignmultiRelated';
        if (post[f]) {
            post[f].insertAdjacentElement('afterend', g);
        }
    }
})();

var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();

function related_results_labels(nerdfx) {
    for (var desfx = 0; desfx < nerdfx.feed.entry.length; desfx++) {
        var nefx = nerdfx.feed.entry[desfx];
        relatedTitles[relatedTitlesNum] = nefx.title.$t;
        for (var ciafx = 0; ciafx < nefx.link.length; ciafx++) {
            if (nefx.link[ciafx].rel == 'alternate') {
                relatedUrls[relatedTitlesNum] = nefx.link[ciafx].href + '?m=1';
                relatedTitlesNum++;
                break;
            }
        }
    }
}

function removeRelatedDuplicates() {
    var viefx = new Array(0);
    var labfx = new Array(0);
    for (var desfx = 0; desfx < relatedUrls.length; desfx++) {
        if (!contains(viefx, relatedUrls[desfx])) {
            viefx.push(relatedUrls[desfx]);
            labfx.push(relatedTitles[desfx]);
        }
    }
    relatedTitles = labfx;
    relatedUrls = viefx;
}

function contains(yelfx, yufx) {
    for (var grefx = 0; grefx < yelfx.length; grefx++) {
        if (yelfx[grefx] == yufx) {
            return true;
        }
    }
    return false;
}

//]]>

</script>

  <b:if cond='data:post.labels'>

    <b:loop values='data:post.labels' var='label'>

      <b:if cond='data:view.isPost'>

        <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&amp;max-results=100&quot;'/>

      </b:if>

    </b:loop>

  </b:if>

<script type='text/javascript'>

//<![CDATA[

(function gourabdesignmultiRelated() {
    var text = '<b>Leggi Anche :</b>';
    let r = Math.floor((relatedTitles.length - 1) * Math.random());
    let i = 0;
    let jumlah = document.querySelectorAll('.gourabdesignmultiRelated');
    while (i < relatedTitles.length && i < jumlah.length) {
        for (let a = 0; a < jumlah.length; a++) {
            jumlah[a].innerHTML = '<span class="content"><span class="text">' + text + '</span><a href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '">' + '<strong>' + relatedTitles[r] + '</strong>' + '</a></span><span class="icon"></span>';
            if (r < relatedTitles.length - 1) {
                r++;
            } else {
                r = 0;
            }
            i++;
        }
    }
})();

//]]>

</script>

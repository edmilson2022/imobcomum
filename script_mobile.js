(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"propagateClick":false,"definitions": [{"vfov":180,"adjacentPanoramas":[{"distance":11.54,"yaw":-155.15,"select":"this.overlay_521230D9_5CD3_366B_41CD_3473F15FE82F.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_521230D9_5CD3_366B_41CD_3473F15FE82F"},"panorama":"this.panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7","class":"AdjacentPanorama"},{"distance":31.62,"yaw":4.83,"select":"this.overlay_53E34CAE_5CD0_EE26_41C9_EE13F2D1DFDA.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_53E34CAE_5CD0_EE26_41C9_EE13F2D1DFDA"},"panorama":"this.panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E","class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_521230D9_5CD3_366B_41CD_3473F15FE82F","this.overlay_53E34CAE_5CD0_EE26_41C9_EE13F2D1DFDA","this.panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_tcap0"],"id":"panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD","label":trans('panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD.label'),"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"url":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"url":"media/panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_0/{face}/vr2gen/0.jpg","rowCount":1,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"IMG_20230215_142626_00_681-HDR"},"hfovMax":150,"hfovMin":"135%"},{"initialSequence":"this.sequence_5622EF23_5CD0_EBDF_4193_59487A29398D","initialPosition":{"yaw":0,"hfov":130,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_camera"},{"initialSequence":"this.sequence_56231F23_5CD0_EBDF_4168_807CDD80FDF0","initialPosition":{"yaw":139.37,"hfov":122,"class":"PanoramaCameraPosition","pitch":2.09},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_camera"},{"propagateClick":false,"scrollBarOpacity":0.5,"contentOpaque":false,"borderRadius":0,"borderSize":0,"scrollBarMargin":1,"paddingLeft":0,"children":["this.IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB_mobile"],"paddingTop":0,"id":"Container_4E11BAD1_5CF3_EA7B_41CC_7BA518A9D348_mobile","width":"100%","paddingBottom":0,"data":{"name":"Container9246"},"paddingRight":0,"horizontalAlign":"center","backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","bottom":"0%","scrollBarVisible":"rollOver","verticalAlign":"middle","backgroundColor":[],"height":"8.649%","overflow":"scroll","layout":"horizontal","scrollBarColor":"#000000","left":"0%","minHeight":10,"class":"Container","scrollBarWidth":5,"shadow":false,"backgroundColorRatios":[],"backgroundColorDirection":"vertical","minWidth":10,"gap":5},{"toolTipBackgroundColor":"#F6F6F6","iconURL":"skin/IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB.png","propagateClick":false,"mode":"toggle","toolTipTextShadowBlurRadius":1,"borderRadius":0,"borderSize":0,"width":46.52,"toolTip":trans('IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB_mobile.toolTip'),"cursor":"hand","paddingLeft":0,"toolTipShadowHorizontalLength":0,"paddingTop":0,"toolTipPaddingBottom":2,"id":"IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB_mobile","toolTipFontSize":6,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","toolTipFontStyle":"normal","toolTipShadowOpacity":1,"toolTipShadowBlurRadius":1,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","toolTipFontColor":"#606060","toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","toolTipDisplayTime":600,"transparencyActive":true,"toolTipPaddingRight":3,"height":31.55,"verticalAlign":"middle","toolTipShadowColor":"#333333","toolTipOpacity":1,"toolTipShadowVerticalLength":0,"toolTipPaddingLeft":3,"maxHeight":64,"maxWidth":64,"toolTipPaddingTop":2,"toolTipBorderRadius":1,"class":"IconButton","toolTipBorderColor":"#767676","minHeight":1,"toolTipTextShadowOpacity":0,"toolTipBorderSize":1,"toolTipShadowSpread":0,"shadow":false,"toolTipFontWeight":"normal","minWidth":1,"data":{"name":"IconButton1493"}},{"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer_mobile","zoomEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"id":"MainViewer_mobilePanoramaPlayer"},{"vfov":180,"adjacentPanoramas":[{"distance":7.54,"yaw":2.74,"select":"this.overlay_5265C0CF_5CD3_3667_41CA_DFDB26CE5E20.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_5265C0CF_5CD3_3667_41CA_DFDB26CE5E20"},"panorama":"this.panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD","class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_5265C0CF_5CD3_3667_41CA_DFDB26CE5E20","this.panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_tcap0"],"id":"panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7","label":trans('panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7.label'),"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"url":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"url":"media/panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_0/{face}/vr2gen/0.jpg","rowCount":1,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"IMG_20230215_142554_00_678-HDR"},"hfovMax":150,"hfovMin":"135%"},{"initialSequence":"this.sequence_56233F23_5CD0_EBDF_4194_DFF2D13BCB0B","initialPosition":{"yaw":35.12,"hfov":150,"class":"PanoramaCameraPosition","pitch":-1.43},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_camera"},{"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"subtitlesPaddingBottom":5,"displayTooltipInTouchScreens":true,"subtitlesBottom":50,"subtitlesVerticalAlign":"bottom","borderSize":0,"progressLeft":0,"subtitlesPaddingLeft":5,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingRight":5,"paddingLeft":0,"playbackBarHeadShadowBlurRadius":1.5,"surfaceReticleSelectionOpacity":1,"id":"MainViewer_mobile","progressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"width":"100%","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderSize":0,"paddingRight":0,"playbackBarHeadHeight":15,"playbackBarLeft":0,"toolTipFontStyle":"normal","toolTipShadowOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColorRatios":[0,1],"data":{"name":"Main Viewer"},"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","toolTipTextShadowColor":"#000000","toolTipDisplayTime":600,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBarOpacity":1,"toolTipPaddingRight":3,"subtitlesTextShadowVerticalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"toolTipOpacity":1,"subtitlesTextShadowBlurRadius":0,"transitionDuration":500,"toolTipShadowColor":"#333138","subtitlesTextDecoration":"none","surfaceReticleColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"firstTransitionDuration":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingTop":2,"height":"100%","playbackBarHeadShadow":true,"playbackBarBackgroundOpacity":1,"toolTipBorderRadius":1,"toolTipBorderSize":1,"toolTipBorderColor":"#767676","playbackBarHeadOpacity":1,"translationTransitionDuration":1000,"progressBottom":0,"toolTipShadowSpread":0,"minHeight":25,"toolTipFontWeight":"normal","minWidth":50,"toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowBlurRadius":1,"playbackBarOpacity":1,"borderRadius":0,"toolTipFontColor":"#606060","playbackBarHeadBorderColor":"#000000","playbackBarProgressOpacity":1,"progressHeight":10,"progressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"subtitlesTop":0,"toolTipShadowHorizontalLength":0,"paddingTop":0,"toolTipPaddingBottom":2,"surfaceReticleOpacity":0.6,"progressRight":0,"subtitlesShadow":false,"toolTipFontSize":"1.11vmin","paddingBottom":0,"progressBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"playbackBarBottom":5,"toolTipShadowBlurRadius":1,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","playbackBarHeadShadowVerticalLength":0,"playbackBarBorderSize":0,"subtitlesOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesEnabled":true,"progressBarBorderColor":"#000000","progressBarBorderRadius":0,"playbackBarHeight":10,"toolTipShadowVerticalLength":0,"doubleClickAction":"toggle_fullscreen","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","transitionMode":"blending","subtitlesGap":0,"toolTipPaddingLeft":3,"playbackBarProgressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadWidth":6,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"subtitlesBackgroundColor":"#000000","subtitlesFontSize":"3vmin","playbackBarProgressBorderRadius":0,"toolTipTextShadowOpacity":0,"shadow":false,"progressBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","progressBorderRadius":0,"progressBackgroundOpacity":1},{"initialSequence":"this.sequence_563F7F21_5CD0_EBDB_41CC_70F3B64E891F","initialPosition":{"yaw":-4.42,"hfov":130,"class":"PanoramaCameraPosition","pitch":1.28},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_camera"},{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7","class":"PanoramaPlayListItem","camera":"this.panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_camera","player":"this.MainViewer_mobilePanoramaPlayer"},"this.PanoramaPlayListItem_4D731FD1_5CF1_2A7B_41C4_6FAD9CBB092A","this.PanoramaPlayListItem_4D70FFD2_5CF1_2A79_41C5_486E3DAEE573","this.PanoramaPlayListItem_4D735FD1_5CF1_2A7B_41CC_17BEDAA3AF04"],"id":"mainPlayList"},{"vfov":180,"adjacentPanoramas":[{"distance":10.35,"yaw":-139.71,"select":"this.overlay_53E6CCAF_5CD0_EE26_41CE_A7DB9B1174D1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_53E6CCAF_5CD0_EE26_41CE_A7DB9B1174D1"},"panorama":"this.panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD","class":"AdjacentPanorama"},{"distance":10.22,"yaw":35.63,"select":"this.overlay_53F81DDA_5CD7_2E6E_41B5_63C29DE52E7D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_53F81DDA_5CD7_2E6E_41B5_63C29DE52E7D"},"panorama":"this.panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E","class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_53E6CCAF_5CD0_EE26_41CE_A7DB9B1174D1","this.overlay_53F81DDA_5CD7_2E6E_41B5_63C29DE52E7D","this.panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_tcap0"],"id":"panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E","label":trans('panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E.label'),"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"url":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"url":"media/panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_0/{face}/vr2gen/0.jpg","rowCount":1,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"IMG_20230215_142906_00_699-HDR"},"hfovMax":150,"hfovMin":"135%"},{"vfov":180,"adjacentPanoramas":[{"distance":9.92,"yaw":156.77,"select":"this.overlay_53E26DDB_5CD7_2E6E_41D6_B246E44A9FEC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_53E26DDB_5CD7_2E6E_41D6_B246E44A9FEC"},"panorama":"this.panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E","class":"AdjacentPanorama"}],"thumbnailUrl":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_t.jpg","partial":false,"pitch":0,"overlays":["this.overlay_53E26DDB_5CD7_2E6E_41D6_B246E44A9FEC","this.panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_tcap0"],"id":"panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E","label":trans('panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E.label'),"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"url":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"url":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"url":"media/panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_0/{face}/vr2gen/0.jpg","rowCount":1,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"hfov":360,"data":{"label":"IMG_20230215_142837_00_696-HDR"},"hfovMax":122,"hfovMin":"135%"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142554_00_678-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":-155.15,"class":"HotspotPanoramaOverlayImage","hfov":15,"vfov":9,"data":{"label":"GoToImg_20230215_142554_00_678-hdr"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4E1D5D5C_5CF1_2E69_41C5_804C484676C1","horizontalAlign":"center","pitch":-8.37,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_532F1CD2_5CD1_2E7E_41C0_8AF0BCB9E845"],"id":"overlay_521230D9_5CD3_366B_41CD_3473F15FE82F"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142906_00_699-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":4.83,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":6.3,"data":{"label":"GoToImg_20230215_142906_00_699-hdr"},"roll":71.24,"verticalAlign":"middle","image":"this.AnimatedImageResource_4E12BD5C_5CF1_2E69_41CC_BE2C42764E5A","horizontalAlign":"center","pitch":-3.07,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53891CB5_5CD0_EE3A_41B4_86FF45D67460"],"id":"overlay_53E34CAE_5CD0_EE26_41C9_EE13F2D1DFDA"},{"inertia":true,"distance":50,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","hfov":24,"rotate":false,"image":"this.res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B","angle":0,"id":"panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_tcap0"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_5622EF23_5CD0_EBDF_4193_59487A29398D"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_56231F23_5CD0_EBDF_4168_807CDD80FDF0"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142626_00_681-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":2.74,"class":"HotspotPanoramaOverlayImage","hfov":16.69,"vfov":12.42,"data":{"label":"GoToImg_20230215_142626_00_681-hdr"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4E1D2D5C_5CF1_2E69_41D2_21125FF03F7E","horizontalAlign":"center","pitch":-12.69,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53FD1119_5CD3_37EB_41C9_7AD9CD8C6CFE"],"id":"overlay_5265C0CF_5CD3_3667_41CA_DFDB26CE5E20"},{"inertia":true,"distance":50,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","hfov":24,"rotate":false,"image":"this.res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B","angle":0,"id":"panorama_50F05BE9_5CCF_6A2A_41D3_FF1497FFF3E7_tcap0"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_56233F23_5CD0_EBDF_4194_DFF2D13BCB0B"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_563F7F21_5CD0_EBDB_41CC_70F3B64E891F"},{"camera":"this.panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD_camera","media":"this.panorama_56160CE8_5CCF_2E2A_41B4_7862AD04AEBD","id":"PanoramaPlayListItem_4D731FD1_5CF1_2A7B_41C4_6FAD9CBB092A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_camera","media":"this.panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E","id":"PanoramaPlayListItem_4D70FFD2_5CF1_2A79_41C5_486E3DAEE573","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_camera","media":"this.panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E","id":"PanoramaPlayListItem_4D735FD1_5CF1_2A7B_41CC_17BEDAA3AF04","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142626_00_681-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":-139.71,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":6.3,"data":{"label":"GoToImg_20230215_142626_00_681-hdr"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4E126D5D_5CF1_2E6B_419D_A7B57C510F5B","horizontalAlign":"center","pitch":-9.31,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53294CD4_5CD1_2E7A_41D6_409B473523A8"],"id":"overlay_53E6CCAF_5CD0_EE26_41CE_A7DB9B1174D1"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142837_00_696-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":35.63,"class":"HotspotPanoramaOverlayImage","hfov":15,"vfov":9,"data":{"label":"GoToImg_20230215_142837_00_696-hdr"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4E124D5D_5CF1_2E6B_41D3_01CAC2F7B9A7","horizontalAlign":"center","pitch":-9.43,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53AC9E01_5CD7_2DDA_41B3_DCB3A9FC5F54"],"id":"overlay_53F81DDA_5CD7_2E6E_41B5_63C29DE52E7D"},{"inertia":true,"distance":50,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","hfov":24,"rotate":false,"image":"this.res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B","angle":0,"id":"panorama_5606C381_5CD0_DADB_41C9_F0CCAEB8815E_tcap0"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20230215_142906_00_699-hdr"},"useHandCursor":true,"items":[{"distance":100,"yaw":156.77,"rotationY":14.75,"class":"HotspotPanoramaOverlayImage","hfov":15,"vfov":9,"data":{"label":"GoToImg_20230215_142906_00_699-hdr"},"roll":76.92,"verticalAlign":"middle","image":"this.AnimatedImageResource_4E12CD5D_5CF1_2E6B_419F_160E7E85AD50","horizontalAlign":"center","pitch":-9.72,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_53128DBA_5CD1_EE29_41B9_5E17B2874820"],"id":"overlay_53E26DDB_5CD7_2E6E_41D6_B246E44A9FEC"},{"inertia":true,"distance":50,"useHandCursor":false,"class":"TripodCapPanoramaOverlay","hfov":24,"rotate":false,"image":"this.res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B","angle":0,"id":"panorama_5618F83B_5CCF_362F_41A9_C1807E55D33E_tcap0"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E1D5D5C_5CF1_2E69_41C5_804C484676C1"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_532F1CD2_5CD1_2E7E_41C0_8AF0BCB9E845"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E12BD5C_5CF1_2E69_41CC_BE2C42764E5A"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4D735FD1_5CF1_2A7B_41CC_17BEDAA3AF04, 38.76923076923077, 0.7731663685152066, 150 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_53891CB5_5CD0_EE3A_41B4_86FF45D67460"},{"class":"ImageResource","levels":[{"height":500,"width":500,"class":"ImageResourceLevel","url":"media/res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B_0.png"}],"id":"res_4C505B19_5CD3_EBEA_41CB_4DAAEBF84B9B"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E1D2D5C_5CF1_2E69_41D2_21125FF03F7E"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4D731FD1_5CF1_2A7B_41C4_6FAD9CBB092A, 4.430769230769231, -0.3352415026833623, 130 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_53FD1119_5CD3_37EB_41C9_7AD9CD8C6CFE"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E126D5D_5CF1_2E6B_419D_A7B57C510F5B"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4D731FD1_5CF1_2A7B_41C4_6FAD9CBB092A, -153.41538461538462, -0.3352415026833623, 130 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_53294CD4_5CD1_2E7A_41D6_409B473523A8"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E124D5D_5CF1_2E6B_41D3_01CAC2F7B9A7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4D70FFD2_5CF1_2A79_41C5_486E3DAEE573, 145.66153846153847, -4.768872987477637, 122 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_53AC9E01_5CD7_2DDA_41B3_DCB3A9FC5F54"},{"frameDuration":41,"frameCount":24,"levels":[{"height":360,"width":400,"class":"ImageResourceLevel","url":"media/res_536E7FF3_5CD1_6A3F_41CB_0E441F9C2CC3_0.png"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4E12CD5D_5CF1_2E6B_419F_160E7E85AD50"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_4D735FD1_5CF1_2A7B_41CC_17BEDAA3AF04, -137.90769230769232, -0.3352415026833623, 150 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_53128DBA_5CD1_EE29_41B9_5E17B2874820"}],"contentOpaque":false,"borderRadius":0,"borderSize":0,"gap":10,"width":"100%","scrollBarMargin":2,"paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"paddingBottom":0,"vrPolyfillScale":0.75,"paddingRight":0,"horizontalAlign":"left","backgroundOpacity":1,"toolTipHorizontalAlign":"center","downloadEnabled":false,"children":["this.MainViewer_mobile","this.Container_4E11BAD1_5CF3_EA7B_41CC_7BA518A9D348_mobile"],"scrollBarVisible":"rollOver","buttonToggleFullscreen":"this.IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB_mobile","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","height":"100%","mediaActivationMode":"window","verticalAlign":"top","backgroundColor":["#FFFFFF"],"overflow":"hidden","layout":"absolute","desktopMipmappingEnabled":false,"scrollBarColor":"#000000","scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeJS":TDV.Tour.Script.executeJS,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getKey":TDV.Tour.Script.getKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openLink":TDV.Tour.Script.openLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clone":TDV.Tour.Script.clone,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cloneBindings":TDV.Tour.Script.cloneBindings,"init":TDV.Tour.Script.init,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlays":TDV.Tour.Script.getOverlays,"downloadFile":TDV.Tour.Script.downloadFile,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupImage":TDV.Tour.Script.showPopupImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cloneCamera":TDV.Tour.Script.cloneCamera,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showWindow":TDV.Tour.Script.showWindow,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPixels":TDV.Tour.Script.getPixels,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isPanorama":TDV.Tour.Script.isPanorama,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizStart":TDV.Tour.Script.quizStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"unregisterKey":TDV.Tour.Script.unregisterKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"translate":TDV.Tour.Script.translate,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer},"left":585.4,"minHeight":0,"class":"Player","scrollBarWidth":10,"shadow":false,"start":"this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_4DF2484F_5CF7_5666_41C0_90157FE22CAB_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorDirection":"vertical","minWidth":0,"data":{"name":"Player756","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"scrollBarOpacity":0.5};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Mon Oct 23 2023
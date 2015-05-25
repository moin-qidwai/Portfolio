<?php
namespace Craft;

class PortfolioPlugin extends BasePlugin
{
	function getName()
    {
         return Craft::t('Portfolio');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Moin Qidwai';
    }

    function getDeveloperUrl()
    {
        return 'http://moin-qidwai.me';
    }

    // public function hasCpSection()
    // {
    //     return true;
    // }
    // public function addTwigExtension()
    // {
    //     Craft::import('plugins.myplugin.twigextensions.httpTwigExtension');
    //     return new httpTwigExtension();
    // }

    
}
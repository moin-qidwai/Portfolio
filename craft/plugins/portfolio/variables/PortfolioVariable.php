<?php
namespace Craft;

class PortfolioVariable
{
	/**
	 * Returns a environment dependent url for cloudinary with cache flushing based on image date.
	 *
	 * @param AssetModelArray         $imageField: The Array of image models derived from asset field like {{ entry.images }}
	 * @param int                     $height: The height of the cloudinary image
	 * @param string|''               $alt: If the image field has no images attached then this url will be used.
	 * @param int|0                   $index: The index of the image form the array. defaults to first.
	 *
	 * @return string                 $url: The processed url.
	 */
	public function cloudinaryEncode($imageField, $height, $alt = "", $index = 0)
	{
		$url = "";
		$localsite = "http://moin-qidwai.dev/"; // replace this with your local url
		if(craft()->siteUrl != $localsite)
		{
			$url = "http://res.cloudinary.com/moin-qidwai/image/fetch/h_".$height.",c_fill/";
			if(sizeof($imageField) > $index)
			{
				$url.= $imageField[$index]->url;
				$url.= urlencode("?&v=").$imageField[$index]->dateUpdated;
			}
			else
			{
				$url.= $alt;
			}
		}
		else
		{
			if(sizeof($imageField) > $index)
			{
				$url = $imageField[$index]->url;
			}
			else
			{
				$url = $alt;
			}
		}

		return $url;
		
	}
}
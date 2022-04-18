<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $feedProvider = $this->whenLoaded('feedProvider');
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text' => $this->text,
            'category' => $this->category,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'feedProvider' => new FeedProviderResource($feedProvider)
        ];
    }
}

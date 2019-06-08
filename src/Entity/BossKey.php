<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BossKeyRepository")
 */
class BossKey
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $boss_key;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBossKey(): ?string
    {
        return $this->boss_key;
    }

    public function setBossKey(string $boss_key): self
    {
        $this->boss_key = $boss_key;

        return $this;
    }
}

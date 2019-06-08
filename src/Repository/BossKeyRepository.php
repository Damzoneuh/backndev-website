<?php

namespace App\Repository;

use App\Entity\BossKey;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method BossKey|null find($id, $lockMode = null, $lockVersion = null)
 * @method BossKey|null findOneBy(array $criteria, array $orderBy = null)
 * @method BossKey[]    findAll()
 * @method BossKey[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BossKeyRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, BossKey::class);
    }

    // /**
    //  * @return BossKey[] Returns an array of BossKey objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BossKey
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

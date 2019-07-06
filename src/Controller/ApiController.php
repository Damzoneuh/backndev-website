<?php

namespace App\Controller;

use App\Entity\Slug;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApiController extends AbstractController
{
    private $_serializer;
    public function __construct()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $this->_serializer = $serializer;
    }

    /**
     * @Route("/api/slug/{id}", name="api_get_slug")
     */
    public function getSlug($id)
    {
        if ($id){
            $em = $this->getDoctrine()->getRepository(Slug::class);
            $find = $em->find($id);
            return $this->json(['success' => $find], 200);
        }
        $em = $this->getDoctrine()->getRepository(Slug::class);
        $find = $em->findAll();
        return $this->json(['success' => $find], 200);
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/admin/api/slug/create", name="api_create_slug")
     */
    public function createSlug(Request $request)
    {
        $data = $this->_serializer->decode($request->getContent(), 'json');
        $em = $this->getDoctrine()->getManager();
        $slug = new Slug();
        $slug->setTitle($data['title']);
        $slug->setDescription($data['description']);
        $em->persist($slug);
        $em->flush();

        return $this->json(['success' => 'The slug was created successfully '], 200);
    }

    /**
     * @param $id
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/admin/api/slug/delete/{id}", name="api_delete_slug")
     */
    public function deleteSlug($id){
        $em = $this->getDoctrine()->getManager();
        $find = $em->getRepository(Slug::class)->find($id);
        $em->remove($find);
        $em->flush();

        return $this->json(['success' => 'The slug was successfully remove '], 200);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/admin/api/slug/update/{id}", name="api_update_slug")
     */
    public function updateSlug(Request $request, $id){
        $data = $this->_serializer->decode($request->getContent(), 'json');
        $em = $this->getDoctrine()->getManager();
        $find = $em->getRepository(Slug::class)->find($id);
        /** @var $find Slug */
        $find->setDescription($data['description']);
        $find->setTitle($data['title']);
        $em->flush();

        return $this->json(['success' => 'The slug was successfully updated'], 200);
    }

    /**
     * @Route("/api/cv", name="api_cv_information")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getCvInformation(){
        $res = [
            'header' => 'Passionné par le web et ses usages, je m\'épanouis par la création d\'applications et l\'apprentissage des langages informatique, Je suis aujourd\'hui à la recherche d\'un poste dans lequel je pourrais vous apporter mes compétences.',
            'education' => [
                [
                    'title' => 'Certificat de formation développeur web full stack',
                    'former'=> 'ESECAD Paris',
                    'date' => 'De Septembre 2017 à Juin 2018',
                    'description' => 'Formation sur les langages principaux du web : HTML / CSS / PHP / MYSQL / JAVASCRIPT'
                ],
                [
                    'title' => 'BEP / CAP Mécanicien automobile',
                    'former' => 'MFR les Ebaux Cruseilles (74)',
                    'date' => 'De Septembre 1999 à Juin 2001',
                    'description' => 'Mécanicien en maintenance automobile'
                ]
            ],
            'experience' =>[
                [
                    'title' => 'Stagiaire Développeur Op',
                    'society' => 'Infomaniak Network',
                    'location' => 'Genève',
                    'date' => 'De Février 2019 à aujourd\'hui',
                    'description' => 'Développement d\'un monitoring et refonte d\'une centrale téléphonique, mise en place d\'un déploiment CI/CD sous Kubernetes'
                ],
                [
                    'title' => 'Auto-entrepreneur',
                    'society' => 'Backndev',
                    'location' => 'Annecy',
                    'date' => 'De Septembre 2018 à aujourd\'hui',
                    'description' => 'Développement de sites divers .'
                ],
                [
                    'title' => 'Développeur back-end',
                    'society' => 'Admaker',
                    'location' => 'Paris',
                    'date' => 'De Septembre 2018 à Décembre 2018',
                    'description' => 'Développement d\'application interne sous symfony'
                ],
                [
                    'title' => 'Stage développeur full stack',
                    'society' => 'C+ communication',
                    'location' => 'Annecy-le-vieux',
                    'date' => 'Mars 2018',
                    'description' => 'création de site vitrine "from scratch"'
                ],
                [
                    'title' => 'Mécanicien poids lourd',
                    'society' => 'Fraikin France',
                    'location' => 'Annecy',
                    'date' => 'Depuis septembre 2001',
                    'description' => 'Réparations, diagnostics éléctronique et éléctrique, carrosserie'
                ]
            ]
        ];

        return $this->json($res, 200,['Access-Control-Allow-origin' => '*']);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/api/skills", name="api_cv_skills")
     */
    public function getSkills(){
        $res = [
            'skills' => [
                'Maîtrise des langages back-end php, mysql, javascript server side et des framworks Symfony, Laravel et express.js',
                'Maîtrise des langages front-end html, css, javascript (es6, jsx, natif) et des framworks react, angular, bootstrap et materialize',
                'Maîtrise des outils de versioning GitHub et GitLab',
                'Maîtrise des environnements Docker',
                'Connaissances des distributions Linux (debian, Ubuntu)'
            ]
        ];

        return $this->json($res, 200);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/api/coffee", name="api_coffee")
     */
    public function getTea(){
        return $this->json(['status' => 418, 'data' => 'I\'m a teapot'], 418);
    }
}

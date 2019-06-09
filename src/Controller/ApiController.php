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
}
